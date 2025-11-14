import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { formatMoney } from "../../utils/money";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
export function CheckoutPage({ cart }) {
  const [paymentSummary, setPaymentSummary] = useState(null);
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  useEffect(() => {
    axios.get("/api/delivery-options?expand=estimatedDeliveryTime").then((response) => {
      setDeliveryOptions(response.data);
    });
    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
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
