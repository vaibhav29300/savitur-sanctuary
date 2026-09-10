const STAR_RATINGS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
}

function resourceId(value, segment) {
  const parts = value.split('/').filter(Boolean)
  const segmentIndex = parts.lastIndexOf(segment)
  return segmentIndex >= 0 ? parts[segmentIndex + 1] : parts.at(-1)
}

async function responseJson(response) {
  try {
    return await response.json()
  } catch {
    return {}
  }
}

async function getAccessToken() {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_BUSINESS_CLIENT_ID,
      client_secret: process.env.GOOGLE_BUSINESS_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_BUSINESS_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  })

  const data = await responseJson(response)
  if (!response.ok || !data.access_token) {
    throw new Error(`Google OAuth failed with status ${response.status}`)
  }

  return data.access_token
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const requiredVariables = [
    'GOOGLE_BUSINESS_ACCOUNT_ID',
    'GOOGLE_BUSINESS_LOCATION_ID',
    'GOOGLE_BUSINESS_CLIENT_ID',
    'GOOGLE_BUSINESS_CLIENT_SECRET',
    'GOOGLE_BUSINESS_REFRESH_TOKEN',
  ]
  const missingVariables = requiredVariables.filter((name) => !process.env[name])

  if (missingVariables.length) {
    return res.status(503).json({ error: 'Google reviews are not configured yet.' })
  }

  try {
    const accessToken = await getAccessToken()
    const accountId = resourceId(process.env.GOOGLE_BUSINESS_ACCOUNT_ID, 'accounts')
    const locationId = resourceId(process.env.GOOGLE_BUSINESS_LOCATION_ID, 'locations')
    const reviewsUrl = new URL(
      `https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(accountId)}/locations/${encodeURIComponent(locationId)}/reviews`,
    )
    reviewsUrl.searchParams.set('pageSize', '50')
    reviewsUrl.searchParams.set('orderBy', 'updateTime desc')

    const reviewsResponse = await fetch(reviewsUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    const data = await responseJson(reviewsResponse)

    if (!reviewsResponse.ok) {
      throw new Error(`Google reviews request failed with status ${reviewsResponse.status}`)
    }

    const reviews = (Array.isArray(data.reviews) ? data.reviews : [])
      .map((review) => ({
        id: review.reviewId,
        author: review.reviewer?.displayName || 'Google user',
        photoUrl: review.reviewer?.profilePhotoUrl || '',
        rating: STAR_RATINGS[review.starRating] || 0,
        text: review.comment?.trim() || '',
        createdAt: review.createTime,
      }))
      .filter((review) => review.id && review.createdAt)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 6)

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    return res.status(200).json({
      reviews,
      averageRating: data.averageRating ?? null,
      totalReviewCount: data.totalReviewCount ?? null,
      updatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Google reviews error:', error)
    return res.status(502).json({ error: 'Google reviews are temporarily unavailable.' })
  }
}
