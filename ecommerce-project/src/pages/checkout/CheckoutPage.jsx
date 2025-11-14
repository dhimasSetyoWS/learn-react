import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
export function CheckoutPage({ cart }) {
  const [paymentSummary, setPaymentSummary] = useState(null);
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  useEffect(() => {
    // getDeliveryOption Data
    const getCheckoutData = async () => {
      let response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
      setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    }

    getCheckoutData();
  }, []);
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummary paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  );
}
