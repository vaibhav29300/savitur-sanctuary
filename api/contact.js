export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const text =
    `*New Enquiry — Savitur Sanctuary*\n\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone || 'Not provided'}\n` +
    `*Email:* ${email}\n\n` +
    `*Message:*\n${message}`

  const apiKey = process.env.CALLMEBOT_API_KEY
  const waNumber = process.env.WA_NUMBER || '917389452289'

  if (!apiKey) {
    return res.status(500).json({ error: 'WhatsApp not configured' })
  }

  try {
    const url =
      `https://api.callmebot.com/whatsapp.php` +
      `?phone=${waNumber}` +
      `&text=${encodeURIComponent(text)}` +
      `&apikey=${apiKey}`

    const response = await fetch(url)
    const body = await response.text()

    if (response.ok && body.toLowerCase().includes('message queued')) {
      return res.status(200).json({ success: true })
    }

    console.error('CallMeBot response:', body)
    return res.status(500).json({ error: 'Failed to send WhatsApp message' })
  } catch (err) {
    console.error('Fetch error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}
