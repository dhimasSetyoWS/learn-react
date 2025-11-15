import axios from "axios";
import { useState, useEffect } from "react";
import "./OrdersPage.css";
import { Header } from "../../components/Header";
import { OrdersHeader } from "./OrdersHeader";
import { OrdersDetails } from "./OrdersDetails";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    }

    getOrders();
  }, []);
  return (
    <>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <OrdersHeader order={order}/>
                <OrdersDetails order={order}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
