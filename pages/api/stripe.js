// import Stripe from 'stripe';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { urlFor } from '../../lib/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1NzS4bJmPwfNNIb0msr3Tg0c'},
                { shipping_rate: 'shr_1NzS5dJmPwfNNIb03j2qNnkE'},
            ],
            line_items: req.body.map((item) => {
                const newImage = urlFor(item.image[0]).url();
                console.log('IMAGE', newImage)

                return {
                    price_data: {
                        currency: 'usd',
                        unit_amount: item.price * 100,
                        product_data: { 
                            name: item.name,
                            images: [newImage],
                        },
                    },
                    adjustable_quantity: {
                        enabled:true,
                        minimum: 1, 
                    },
                    quantity: item.quantity
                };
            }),
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}