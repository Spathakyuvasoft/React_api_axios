import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [productList, setProductList] = useState([])

  const getProductListing = async () => {
    
      const result = await axios.get("https://dummyjson.com/products");
    
      setProductList(result?.data?.products || []);
  };

 

  useEffect(() => {
    getProductListing();
  }, []);

  return (
    <div className="page">
		<h1 className="title">fetching an api with axios</h1>
		<ul className="ul">
			{productList.map((each, index) => (
			<li className="li" key={each.id}>
				<p>{each.title}</p>
				<div className="imageCard">
					<img src={each.thumbnail} className="image" />
				</div>
			</li>
			))}
		</ul>
    </div>
  );
}

export default App;
