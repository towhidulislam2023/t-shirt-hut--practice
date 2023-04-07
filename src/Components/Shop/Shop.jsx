import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplatOdder from '../DisplayOffer/DisplatOdder';
import "./Shop.css"
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
    const loadedData=useLoaderData()
    const [cart,setCart]=useState([]);
    const handelAddtopcart=(product)=>{
        const exixt = cart.find(pd=>pd._id===product._id)
        if (exixt) {
            toast("Alrady Add To Cart")
        }
        else{
            setCart([...cart,product])
        }
    }
    const handelRemoveFromCart = (product)=>{
        const remainingProduct = cart.filter(pd => pd._id !== product._id )
        setCart(remainingProduct)
    }
    return (
        <div className='FullShopContainer'>
            <div className='shopContainer'>
                {
                    loadedData.map(tshirt => <DisplatOdder key={tshirt._id} tshirt={tshirt} handelAddtopcart={handelAddtopcart}></DisplatOdder>)
                }
            </div>
            <div className='cartComp'>
                <Cart handelRemoveFromCart={handelRemoveFromCart} carts={cart}></Cart>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Shop;