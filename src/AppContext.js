import {createContext,useState, useEffect} from 'react';
import axios from 'axios';
export const AppContext=createContext({})
export function AppProvider({children}){
    
    const[product,setProduct]=useState(null)
    const[cart,serCart]=useState([])
    
    function getData(){
        const url='https://661b930865444945d04fca10.mockapi.io/Product'
        axios.get(url)
        .then(function(res){
            setProduct(res.data)

        })
        .catch(function(error){
            console.log(error)
        })
    }
    const addCart=(id)=>{
        const pro=product.find(item=>item.id==id)
        serCart([...cart,pro])
        console.log(cart)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <AppContext.Provider value={{addCart,cart}}>
            {children}
        </AppContext.Provider>
    )
}
