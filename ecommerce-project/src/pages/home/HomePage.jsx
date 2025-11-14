import "./Homepage.css";
import axios from  "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductGrid } from "./ProductGrid";

export function HomePage({cart}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // get products data
    const getProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    }
    
    getProducts();
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
