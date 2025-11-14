import "./Homepage.css";
import axios from  "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductGrid } from "./ProductGrid";

export function HomePage({cart}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // get product data
    axios.get("/api/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);
  return (
    <>
      <title>HomePage</title>
	  <Header cart={cart}/>
      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>
  );
}
