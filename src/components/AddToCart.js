import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";


const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className='shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900'
        key={product._id}
      >
        <div className="text-2xl top-2 right-3 absolute rounded-full text-white bg-blue-500 w-8 h-8  ">
          <h6 className="grid place-items-center">{product.quantity}</h6>
        </div>
        <div className='h-52 w-52 mx-auto'>
          <img src={product.image} alt={product.model} />
        </div>

        <h1 className='font-bold text-center'>{product.model}</h1>
        <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
        <div className=' flex-1'>
          <ul className='space-y-2'>
            {product.keyFeature.map((feature) => {
              return <li className='text-sm ' key={feature}>{feature}</li>;
            })}
          </ul>
        </div>
        <div className='flex gap-2 mt-5'>


          <button
            onClick={() => dispatch(removeFromCart(product))}
            className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToCart;