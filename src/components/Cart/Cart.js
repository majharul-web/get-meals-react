import React from 'react';

const Cart = (props) => {
    // console.log(props)
    const { cart } = props;


    return (
        <div className="p-3 border rounded" >
            <h5 className="text-center text-danger">Selected Product</h5>

            {
                cart.map(item => <p className="fw-bold">{item}</p>)
            }
        </div>
    );
};

export default Cart;