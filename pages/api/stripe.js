// import Stripe from 'stripe';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { urlFor, client } from '../../lib/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
      try {
          // 1. Fetch product details based on the product IDs
          const products = await client.fetch('*[_id in $ids]', {
              ids: req.body.map(item => item.id)
          });

          // 2. Map the products to their correct price and details
          const line_items = req.body.map(item => {
              const productDetails = products.find(p => p._id === item.id);
              if (!productDetails) {
                  throw new Error("Product not found");
              }
              const newImage = urlFor(productDetails.image[0]).url();

              return {
                  price_data: {
                      currency: 'usd',
                      unit_amount: productDetails.price * 100,
                      product_data: { 
                          name: productDetails.name,
                          images: [newImage],
                      },
                  },
                  adjustable_quantity: {
                      enabled:true,
                      minimum: 1, 
                  },
                  quantity: item.quantity
              };
          });

          // Define the params for the Stripe checkout session
          const params = {
              submit_type: 'pay',
              mode: 'payment',
              payment_method_types: ['card'],
              billing_address_collection: 'auto',
              shipping_options: [
                  { shipping_rate: 'shr_1NzS4bJmPwfNNIb0msr3Tg0c'},
                  { shipping_rate: 'shr_1NzS5dJmPwfNNIb03j2qNnkE'},
              ],
              line_items: line_items,
              success_url: `${req.headers.origin}/success`,
              cancel_url: `${req.headers.origin}/canceled`,
          }

          // Create the Stripe checkout session with the defined params
          const session = await stripe.checkout.sessions.create(params);

          res.status(200).json(session);
      } catch (err) {
          res.status(err.statusCode || 500).json(err.message);
      }
  } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
  }
}