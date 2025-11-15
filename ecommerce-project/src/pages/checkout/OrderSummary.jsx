import { DeliveryOptions } from "./DeliveryOptions";
import { CartDetail } from "./CartDetail";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          });
          return (
            <div key={cartItem.id} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
              <div className="cart-item-details-grid">
                <CartDetail cartItem={cartItem} />
                <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
