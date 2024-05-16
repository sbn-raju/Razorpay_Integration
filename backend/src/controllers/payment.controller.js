import { instance } from "../constants/paymentInstance.constants.js";
import crypto from "crypto";
import pool from "../database/connectDb.js";
import dotenv from "dotenv";
dotenv.config();

//PAYMENT CONTROLLER
const paymentController = async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: Number(amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order: order,
  });
};

//PAYMENT VERIFICATION
const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    const paymentVerificationQuery =
      "INSERT INTO payments (razorpay_order_id, razorpay_payment_id, razorpay_signature) VALUES ($1,$2,$3)";
    const paymentVerificationValues = [
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    ];
    try {
      const paymentVerify = await pool.query(
        paymentVerificationQuery,
        paymentVerificationValues
      );
      if (paymentVerify.rowCount != 0) {
        return res.redirect(
          `${process.env.FRONT_END_SUCCESS}?reference=${razorpay_payment_id}`
        );
      }
    } catch (err) {
      return res.redirect(`${process.env.FRONT_END_FAIL}`);
    }
  } else {
    return res.redirect(`${process.env.FRONT_END_FAIL}`);
  }
};

export { paymentController, paymentVerification };
