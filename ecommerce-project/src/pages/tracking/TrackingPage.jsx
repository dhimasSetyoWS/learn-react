import axios from "axios";
import dayjs from "dayjs";
import "./TrackingPage.css";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
export function TrackingPage({ cart }) {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();
  let isPreparing = 0;
  let isShipped = 0;
  let isDelivered = 0;
  useEffect(() => {
    const getOrder = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
      console.log(response.data);
    };
    getOrder();
  }, [orderId]);

  if (!order) {
    return null;
  }
  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  let progress = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (progress > 100) {
    progress = 100;
  }
  if (progress < 33) {
    isPreparing = progress;
  } else if (progress >= 33 && progress < 100) {
    isShipped = progress;
  } else if (progress === 100) {
    isDelivered = progress;
  }
  return (
    <>
      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            {progress >= 100 ? "Delivered on" : "Arriving on"} {dayjs(order.orderTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{order.product}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing === progress && "current-status"}`}>Preparing</div>
            <div className={`progress-label ${isShipped === progress && "current-status"}`}>Shipped</div>
            <div className={`progress-label ${isDelivered === progress && "current-status"}`}>Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
