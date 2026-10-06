const express = require('express');
const cors = require('cors'); 

const SSLCommerzPayment = require('sslcommerz-lts');

const app = express();

app.use(cors());
app.use(express.json())

// Store the core values in variables
const store_id = 'testbox'
const store_passwd = 'qwerty'
const is_live = false //true for live, false for sandbox

// Create A Payment Gateway
app.post('/pay', async (req, res) => {
  try {
    const sslcz = new SSLCommerzPayment(
      store_id,
      store_passwd,
      is_live
    );

    const data = {
      total_amount: 100,
      currency: 'BDT',
      tran_id: Date.now().toString(),
      success_url: 'http://localhost:5000/success',
      fail_url: 'http://localhost:5000/fail',
      cancel_url: 'http://localhost:5000/cancel',
      product_name: 'React Course',
      product_category: 'Education',
      product_profile: 'general',
      cus_name: 'Ostad Student',
      cus_email: 'stu13@example.com',
      cus_add1: 'Mirpur',
      cus_add2: 'Kazipara',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1209',
      cus_country: 'Bangladesh',
      cus_phone: '01700000000',
      shipping_method: 'NO',
    }

    const response = await sslcz.init(data);
    console.log(response);

    res.json({
      paymentUrl: response.GatewayPageURL
    })


  } catch (error) {
    // console.log(error)
    res.status(500).json({
      message: error.message
    })
  }
})


// Basic port Declaration
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`)
})