import { formatMoney } from "../../utils/money";
import { Fragment } from "react";
import dayjs from "dayjs";
export function DeliveryOptions({ cartItem, deliveryOptions }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((option) => {
        let priceString = "Free Shipping";

        if (option.priceCents > 0) {
          priceString = `${formatMoney(option.priceCents)} - Shipping`;
        }
        return (
          <Fragment key={option.id}>
            <div className="delivery-option">
              <input type="radio" checked={option.id === cartItem.deliveryOptionId} className="delivery-option-input" name={`delivery-option-${cartItem.product.id}`} />
              <div>
                <div className="delivery-option-date">{dayjs(option.estimatedDeliveryTimeMs).format("dddd, MMMM D")}</div>
                <div className="delivery-option-price">{priceString}</div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
