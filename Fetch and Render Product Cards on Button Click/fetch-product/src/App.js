import React, {useState} from "react";
import "./App.css"

function App(){
const [products, setproducts] = useState([]);
const [load, setload] = useState("false");
const [err, seterr] = useState(null);

const fetchproducts = async ()=>{
  setload(true);
  seterr(null);

  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if(!response.ok)
      throw new Error("Faild to fetch products")
    const res = await response.json();
    setproducts(res);
  } catch (error) {
    seterr(error.message);
  }finally{
    setload(false)
  }
};

const clearproducts = ()=>{
  setproducts([]);
  seterr(null);
}
return (
  <div className="App">
    <h1>products Store</h1>
    <div className="buttons">
      <button onClick={fetchproducts}>Load products</button>
      <button onClick={clearproducts} disabled={products.length===0}>Clear products</button>
    </div>

  {load && <p>Loading...</p>}
  {err && <p className="error">{err}</p>}
  {!load && !err && products.length===0 && <p>No products Available.</p>}

  <div className="product-grid">
    {products.map((prod)=>(
      <div key={prod.id} className="product-card">
        <img src={prod.image} alt={prod.title}/>
        <h3>{prod.title}</h3>
        <p>${prod.price}</p>
      </div>
    ))}
  </div>
  </div>
)
}
export default App;