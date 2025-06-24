import React,{useState, useEffect} from "react";
import axios from "axios";
import "./App.css"

function App(){
const [memes, setmemes]=useState([]);
const [displaymeme, setdisplaymeme] = useState([]);
const [load, setload] = useState(false);
const [err,seterr]=useState(null);
const [theme, settheme] = useState(localStorage.getItem("theme") ||"light");
const [search, setsearch] = useState("");
const [sort, setsort] = useState("");
const [filter, setfilter] = useState(false);


const themes = () => {
  const newtheme = theme === "light" ? "dark":"light";
  settheme(newtheme);
  localStorage.setItem("theme",newtheme);
};

const fetchmeme = async ()=>{
  setload(true);
  seterr("");
  try {
    const response = await axios.get("https://api.imgflip.com/get_memes");
    setmemes(response.data.data.memes);
    setdisplaymeme(response.data.data.memes);    
  } catch (error) {
    seterr("Faild to load meme")
  }finally{
    setload(false);
  }
};

useEffect(()=>{
  let filtered = [...memes];

  if(search){
    filtered = filtered.filter((meme)=>meme.name.toLowerCase().includes(search.toLowerCase()));
  }

  if(filter){
    filtered = filtered.filter((meme)=>meme.width>500);
  }

  if(sort=="name"){
    filtered.sort((a,b)=>a.name.localeCompare(b.name));
  }
  setdisplaymeme(filtered);
},[search, sort, filter, memes]);

const resetall = ()=>{
  setsearch("");
  setsort("");
  setfilter(false);
  setdisplaymeme(memes);
};

return (
  <div className={`app ${theme}`}>
    <h1>Meme Explorer</h1>
    <div className="controls">
      <button style={{border:'2px solod red',backgroundColor:'yellow',borderRadius:'6px'}}onClick={fetchmeme}>Load Memes</button>
      <button style={{border:'2px solod red',backgroundColor:'yellow',borderRadius:'6px'}}onClick={resetall}>Reset</button>
      <label>
        search:
        <input style={{border:'2px solod red',borderRadius:'6px'}}type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
      </label>
      <label>
        Sort:
        <select style={{border:'2px solod red',borderRadius:'6px'}}value={sort} onChange={(e)=>setsort(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
        </select>
      </label>
      <label>
        <input type="checkbox" checked={filter} onChange={()=>setfilter(!filter)} />
        Width > 500
      </label>
      <button style={{border:'2px solod red',borderRadius:'6px'}}onClick={themes}>
        {theme==="light"?"Dark Mode":"Light Mode"}
      </button>
    </div>

    {load && <p>Loading..</p>}
    {err && <p style={{color:'red'}}>{err}</p>}
    {!load && !err && displaymeme.length === 0 && <p>No memes found</p>}

    <div className="meme-grid">
      {displaymeme.map((meme)=>(
        <div key={meme.id} className="meme-card">
          <img src={meme.url} alt={meme.name}/>
          <p>{meme.name}</p>
        </div> 
      ))}
    </div>
  </div>
)
}
export default App;