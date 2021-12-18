import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Perticular from './Perticular'


function Product() {
    const [data,setData] = useState("")
    

    const [response,setResponse] = useState([]);
    
    const[msg,setmsg] = useState("")



    
  
    const fetchData = async () =>{
  
      const data1 = await axios.get(`http://localhost:3001/get/products/${data}`)
      if(data1.data.data.length===0){
        setmsg("No match found!!!")
      }else{
        console.log(data1.data.data);
        setResponse(data1.data.data)
      }
    
  
    }

    const products =async (data)=> {
        let id = data;
        const dataa = await axios.get(`http://localhost:3001/api/product/${id}`)
        
        console.log(dataa.data.data1.name)
        localStorage.setItem("perticular",dataa.data.data1)
        
    }
  


    return (
        <div>
            <input type="text" placeholder="what are you looking for?" onChange = {(e)=>setData(e.target.value)}/>
             <button onClick={fetchData}>Search</button>

           
            
             {
               response.map(data =>{
                return(
                
                 <div key={data._id}>
                  <Link to ="/product/details">
                 {data.name}
        
                 <img src = {data.image} alt="" onClick={()=>products(data._id)}/>
              
         
                 </Link>
                  <p> {data.price}</p>
                  <p>{data.rating}</p>
                 
                  <p>{data.description}</p>

                 
                  
         </div>
       )
       
     })
   }
 
  {/* <Perticular table_data = {subdata}/>
{subdata.name} */}


   {msg}
        </div>
    )
}

export default Product
