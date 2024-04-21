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
        const index=cart.findIndex(item=>item.id==id)
        if(index>=0){
            const newCart=cart
            newCart[index]['Sl']++
        }
        else{
            serCart([...cart,{...pro,Sl:1}])
        }
        
        console.log(cart)
    }
    const removeByid=(id)=>{
        serCart(cart.filter(item=>item.id !=id))
    }
    const updateSl=(id,num)=>{
        serCart(cart.map(item=>((item.id==id)&&!(item.Sl==1 && num ==-1))?{...item,Sl:item.Sl+num}:item))

    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <AppContext.Provider value={{addCart,cart,removeByid,updateSl}}>
            {children}
        </AppContext.Provider>
    )
}
