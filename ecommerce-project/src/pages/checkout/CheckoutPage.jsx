import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
export function CheckoutPage({ cart, loadCart }) {
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
  }, [cart]); // pakai cart karena ketika kita update delivery option, maka dia akan load kembali cart nya yang mana akan mengupdate state cart yang ada di parent, sehingga jika state cart ke update, maka use effect ini akan di jalankan kembali
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart={cart}/>
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}
