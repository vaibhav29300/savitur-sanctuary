export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { company, consent } = req.body ?? {}

  // Silently accept honeypot submissions so automated bots do not keep retrying.
  if (company) {
    return res.status(200).json({ success: true })
  }

  const clean = (value, maxLength) =>
    typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

  const name = clean(req.body?.name, 100)
  const email = clean(req.body?.email, 200)
  const phone = clean(req.body?.phone, 30)
  const service = clean(req.body?.service, 150)
  const message = clean(req.body?.message, 1500)

  const phoneDigits = phone.replace(/\D/g, '')
  const visitorWhatsAppNumber =
    phoneDigits.length === 10
      ? `91${phoneDigits}`
      : phoneDigits.length === 11 && phoneDigits.startsWith('0')
        ? `91${phoneDigits.slice(1)}`
        : phoneDigits

  if (!name || !email || !phone || !service || consent !== true) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  if (visitorWhatsAppNumber.length < 10 || visitorWhatsAppNumber.length > 15) {
    return res.status(400).json({ error: 'Invalid phone number' })
  }

  const text =
    `*New Enquiry — Savitur Pranic Healing*\n\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone || 'Not provided'}\n` +
    `*Email:* ${email}\n` +
    `*Interested In:* ${service}\n` +
    (message ? `\n*Message:*\n${message}` : '') +
    `\n\n*Chat with ${name}:*\nhttps://wa.me/${visitorWhatsAppNumber}` +
    `\n\n_Sent from the Savitur website_`

  const instanceId = process.env.GREENAPI_INSTANCE_ID
  const apiToken   = process.env.GREENAPI_API_TOKEN
  const waNumber   = (process.env.WA_NUMBER || '917045256527').replace(/\D/g, '')
  // Each Green API instance has its own host (e.g. https://1103.api.green-api.com),
  // shown as "apiUrl" in the instance console. Falls back to the generic gateway.
  const apiUrl     = (process.env.GREENAPI_API_URL || 'https://api.green-api.com').replace(/\/+$/, '')

  if (!instanceId || !apiToken || waNumber.length < 10) {
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
