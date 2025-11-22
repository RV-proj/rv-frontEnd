// FIXME delete this test component also delete test route

"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

const TestPage = () => {
  // FIXME move this to order
  useEffect(() => {
    const sessionId = localStorage.getItem("stripe_session_id");
    const orderData = JSON.parse(localStorage.getItem("order_data"));

    if (!sessionId || !orderData) return;

    fetch("http://localhost:5000/order/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, orderData }),
    })
      .then((item) => item.json())
      .then((data) => {
        if (data) {
          toast.success("Payment successful!");
          // cleanup
          localStorage.removeItem("stripe_session_id");
          localStorage.removeItem("order_data");
        }
      })
      .catch(() => toast.error("Verification failed"));
  }, []);

  return <div></div>;
};

export default TestPage;
