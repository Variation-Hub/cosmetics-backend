const Payment = require("../models/paymentModel");

const createPayment = async (req, res) => {
  try {
    const userData = req.body;

    await Payment.create({ data: userData });

    return res.status(201).json({
      status: true,
      message: "Payment save successfully"
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      data: null,
      message: error.message
    });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json({
      status: true,
      data: payments,
      message: "payments fetch successfully"
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      data: null,
      message: 'Error updating user'
    });
  }
};

module.exports = {
  createPayment,
  getAllPayments
};
