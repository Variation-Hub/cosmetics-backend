const express = require('express');
const router = express.Router();
const { createPayment, getAllPayments } = require('../controllers/paymentController');

router.post('/callback/payout/auth/json', createPayment);
router.get('/payment/get', getAllPayments);

module.exports = router;
