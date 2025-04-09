import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const { items } = req.body

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Items not found.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: items.map((item: { price_id: string; quantity: number }) => ({
        price: item.price_id,
        quantity: item.quantity,
      })),
    })

    return res.status(200).json({ checkoutUrl: checkoutSession.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
