import React from "react";
import Cards from "./Cards.jsx";
import products from "../constants/products.js";
import axios from "axios";


const Home = () => {
  const paymentHandler = async (price) => {
    const {
      data: { key },
    } = await axios.get("/api/v1/key");

    const {
      data: { order },
    } = await axios.post("/api/v1/payments", {
      amount: price,
    });

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Collasyn",
      description: "Test Transaction",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=201,h=215,fit=crop/YleMLl3B2gc3R0xp/2-Yg2l1wWV5NSa1NRK.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "/api/v1/paymentVerification",
      prefill: {
        name: "Raju",
        email: "Raju@exampe.com",
        contact: "9039456722",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#000000",
      },
    };
    const razor = new Razorpay(options);
    razor.open();
  };

  return (
    <Cards products={products} amount={1000} paymentHandler={paymentHandler} />
  );
};
export default Home;
