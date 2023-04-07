import React from 'react';
import { Link } from 'react-router-dom';
import  "./header.css"
const Header = () => {
    return (
        <div className='headercompo'>
            <Link className='navbar' to={"/"}>Home</Link>
            <Link className='navbar' to={"/shop"}>Shop</Link>
            <Link className='navbar' to={"/order"}>Order</Link>
            <Link className='navbar' to={"/review"}>Order-review</Link>
        </div>
    );
};

export default Header;