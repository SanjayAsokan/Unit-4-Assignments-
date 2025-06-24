import React, {useState} from "react";
import "./App.css"
function App(){
  const [load, setload] = useState(false);
  const [err, seterr] = useState(null);

  const fetchproduct = async ()=>{
    setload(true);
    seterr(null);

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if(!response.ok){
        throw new Error("Failed to fetch");        
      }
      const res = await response.json();
      console.log(res)
    } catch (error) {
      console.log(error.message)
      seterr(error.message)
    }finally{
      setload(false)
    }
  };
  return(
    <div style={{textAlign:'center'}}>
      <h1>Fetch Products</h1>
      <button onClick={fetchproduct}>Fetch Products</button>
      {load && <p>Loading....</p>}
      {err && <p style={{color:'red'}}>{err}</p>}
    </div>
  );
}

export default App;