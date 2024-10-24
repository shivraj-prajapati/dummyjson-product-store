import logo from "./logo.svg";
import "./App.css";
import Category from "./Category";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProducts, setFinalProducts] = useState([]);
  let [catName, setCatName] = useState(""); 

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalResponse) => {
        setFinalCategory(finalResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalResponse) => {
        setFinalProducts(finalResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !==  ""){
      axios
      .get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => res.data)
      .then((finalResponse) => {
        setFinalProducts(finalResponse);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  },[catName])

  let pItems = finalProducts.products?.map((product, i) => {
    return (
      <ProductItems
        key={i}
        title={product.title}
        price={product.price}
        image={product.thumbnail}
      />
    );
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center text-[40px] mb-[30px] font-bold">
            Our Products
          </div>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName}/>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                {finalProducts.products?.length > 0 ? pItems : "No Data Found.!"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({ title, price, image }) {
  return (
    <div className="shadow-lg pb-4 p-2">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <b>MRP : ₹ {price}</b>
    </div>
  );
}
