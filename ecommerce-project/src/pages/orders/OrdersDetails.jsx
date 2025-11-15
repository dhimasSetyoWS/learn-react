import { Fragment } from "react";
import dayjs from "dayjs";
import { Link } from "react-router";
export function OrdersDetails({ order }) {
  return (
    <div className="order-details-grid">
      {order.products.map((detail) => {
        return (
          // Pakai Fragment karena, fragment yang <></> tidak bisa pakai key={}
          <Fragment key={detail.productId}>
            <div className="product-image-container">
              <img src={detail.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{detail.product.name}</div>
              <div className="product-delivery-date">Arriving on: {dayjs(detail.estimatedDeliveryTimeMs).format("MMMM D")}</div>
              <div className="product-quantity">Quantity: {detail.quantity}</div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${detail.productId}`}>
                <button className="track-package-button button-secondary">Track package</button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
