export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, service, message } = req.body ?? {}

  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const text =
    `*New Enquiry — Savitur Pranic Healing*\n\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone || 'Not provided'}\n` +
    `*Email:* ${email}\n` +
    `*Interested In:* ${service}\n` +
    (message ? `\n*Message:*\n${message}` : '') +
    `\n\n_Sent from the Savitur website_`

  const instanceId = process.env.GREENAPI_INSTANCE_ID
  const apiToken   = process.env.GREENAPI_API_TOKEN
  const waNumber   = process.env.WA_NUMBER || '917389452289'
  // Each Green API instance has its own host (e.g. https://1103.api.green-api.com),
  // shown as "apiUrl" in the instance console. Falls back to the generic gateway.
  const apiUrl     = (process.env.GREENAPI_API_URL || 'https://api.green-api.com').replace(/\/+$/, '')

  if (!instanceId || !apiToken) {
    return res.status(500).json({ error: 'WhatsApp not configured' })
  }

  try {
    const url = `${apiUrl}/waInstance${instanceId}/sendMessage/${apiToken}`

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: `${waNumber}@c.us`,
        message: text,
      }),
    })

    const data = await response.json()

    if (response.ok && data.idMessage) {
      return res.status(200).json({ success: true })
    }

    console.error('Green API error:', data)
    return res.status(500).json({ error: 'Failed to send WhatsApp message' })
  } catch (err) {
    console.error('Error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}
