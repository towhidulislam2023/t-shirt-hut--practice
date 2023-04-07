import React from 'react';
import "./Cart.css"
const Cart = ({ carts, handelRemoveFromCart }) => {
    return (
        <div>
            {
                carts.map(cart => <div className='cartSty' key={cart.index}><p className='psty' key={cart.index}>{cart.name}</p>
                    <button onClick={() => handelRemoveFromCart(cart)}>X</button>
                </div>)
            }


        </div>
    );
};

export default Cart;