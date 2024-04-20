import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { AppContext } from '../AppContext';


const Footer = () => {
    
const{addCart,cart}=useContext(AppContext)
    const[data,setData]=useState(null)
    const url='https://661b930865444945d04fca10.mockapi.io/Product'
    const getData=()=>{
        axios.get(url)
        .then(function(res){
            console.log(res)
            setData(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            <h1>so luong:{cart.length}</h1>
            {data&&data.map((item,index)=>(
                <div key={index}>
                    <p>Ten san pham:{item.Ten}</p>
                    <button onClick={()=>addCart(item.id)}>buy</button>
                </div>
            ))}
        </div>
    );
}

export default Footer;
