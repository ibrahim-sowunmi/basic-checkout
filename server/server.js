require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const YOUR_DOMAIN = 'http://localhost:4242';
const CLIENT_DOMAIN = 'http://localhost:3000'
const TEST_CUSTOMER = "cus_OyqvSqTVjw5nvG"

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [{
      price: "price_1O8RKTGJFg5GbaR8clBGyyMc",
      // For metered billing, do not pass quantity
      quantity: 1,
    }],
    customer: TEST_CUSTOMER,
    mode: 'subscription',

    success_url: CLIENT_DOMAIN,
    cancel_url: CLIENT_DOMAIN,
  });
  res.json({ url: session.url });
});

app.post('/create-portal-session', async (req, res) => {
  const { session_id } = req.body;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: TEST_CUSTOMER,
    return_url: CLIENT_DOMAIN,
  });
  res.json({ url: portalSession.url });
});

app.listen(4242, () => console.log('Running on port 4242'));