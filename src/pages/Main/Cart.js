import React from "react";
import { useSelector } from "react-redux";
import AddToCart from "../../components/AddToCart";

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        cart.map(product => <AddToCart
          key={product._id}
          product={product}
        ></AddToCart>)
      }
    </div>
  );
};

export default Cart;
