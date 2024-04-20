import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Cart = () => {
    
    const{cart}=useContext(AppContext)
    return (
        <div>
           
            {
                cart.map((item,index)=>(
                    <div key={index}>{item.Ten}</div>
                ))
            }
        </div>
    );
}

export default Cart;
