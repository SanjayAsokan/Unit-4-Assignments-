import React, {useState} from "react";
import ProductCard from "./productCard";

function App(){
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({name:'', price:'',image:'',discount:''});

  const [errors, setErrors]=useState({});

  const validate = ()=>{
    const err = {};
    if(!formData.name.trim()) err.name = "Name is required";
    if(!formData.price || formData.price <= 0) err.price = "Price must be a positive number.";
    if(!formData.image.startsWith("http")) err.image = "Enter a valid image URL";
    if(formData.discount && (formData.discount < 0 || formData.discount > 100)) {err.discount = "Discount must be between 0 to 100 only."}
    setErrors(err);
    return Object.keys(err).length === 0
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(validate()){
      setProducts([...products, formData]);
      setFormData({name:'',price:'',image:'',discount:''});
      setErrors({});
    }
  };
  return (
    <div style={{padding:'20px', border:'2px solid'}}>
      <h1>product Entery</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" value={formData.name}
        onChange={(e)=> setFormData({...formData, name:e.target.value})}/>
        <br/>
        {errors.name && <span style={{color:'red'}}>{errors.name}</span>}<br/>

         <input type="number" placeholder="price" value={formData.price}
         onChange={(e)=>setFormData({...formData,price:e.target.value})}/><br/>

         {errors.price && <span style={{color:'red'}}>{errors.price}</span>}<br/>

         <input type="text" placeholder="Image URL" value={formData.image}
         onChange={(e)=>setFormData({...formData,image:e.target.value})}/><br/>
         {errors.image && <span style={{color:"red"}}>{errors.image}</span>}<br/>

         <input type="number" placeholder="Discount(%)" value={formData.discount}
         onChange={(e)=> setFormData({...formData, discount:e.target.value})}/><br/>
         {errors.discount && <span style={{color:"red"}}>{errors.discount}</span>}<br/><br/>

        <button type="submit"> Add Product</button>
      </form>
       <h2>Product List</h2>
       {products.map((p, i)=>(
        <ProductCard key={i} name={p.name} price={p.price} image={p.image} discount={p.discount}/>
       ))}
    </div>
  );
}
export default App;
