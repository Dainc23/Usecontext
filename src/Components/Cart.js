import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Button, Input, Table } from 'reactstrap';
const Cart = () => {

    const { cart,removeByid,updateSl } = useContext(AppContext)
    return (
        <div>

            <Table>
                <thead>
                    <tr>
                        <th>
                            STT
                        </th>
                        <th>
                            Ten san pham
                        </th>
                        <th>
                            gia tien
                        </th>
                        <th>
                            So luong
                        </th>
                        <th>
                            Thao tac
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr>
                            <th scope='row'>{index +1}</th>
                            <td>{item.Ten}</td>
                            <td>{item.Gia}</td>
                            <td><Button onClick={()=>updateSl(item.id,-1)}>-</Button>
                            {item.Sl}
                            <Button onClick={()=>updateSl(item.id,1)}>+</Button>
                            </td>
                            <td><Button onClick={()=>removeByid(item.id)}><i className='fa-solid fa-trash'></i></Button></td>

                        </tr>
                    ))}
                </tbody>
            </Table>
            <h2>Total:{cart.reduce((tong,item)=>item.Gia*item.Sl+tong,0)}</h2>

        </div>
    );
}

export default Cart;
