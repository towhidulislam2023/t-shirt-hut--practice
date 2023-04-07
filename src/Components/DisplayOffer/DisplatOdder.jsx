import React from 'react';
import "./Display.css"

const DisplatOdder = ({ tshirt, handelAddtopcart }) => {
    const { _id, gender, name, picture, price}=tshirt
    return (
        <div className='shirt-box'>
            <img className='imgSxz' src={picture} alt="" />
            <h3>{tshirt.name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handelAddtopcart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default DisplatOdder;