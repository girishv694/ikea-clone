
import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [data,setData] = useState("")

  const [response,setResponse] = useState([]);

  const fetchData = async () =>{

    const data1 = await axios.get(`http://localhost:3001/get/products/${data}`)
    console.log(data1.data.data);
    setResponse(data1.data.data)

  }

 
  return (
    <div className="App">
     <input type="text" placeholder="what are you looking for?" onChange = {(e)=>setData(e.target.value)}/>
     <button onClick={fetchData}>Search</button>
    

   {
     response.map(data =>{
       return(

        <div key={data._id}>
         {data.name}
         {data.price}
         <img src = {data.image} alt=""/>
         </div>
       )
       
     })
   }
    </div>
  );
}

export default App;
