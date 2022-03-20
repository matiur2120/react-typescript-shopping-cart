import React from "react";
import CartItem from "../CartItem/CartItem";
import { CartItemsType } from "../App";
import { Wrapper } from "./Cart.style";

type Props = {
  cartItems: CartItemsType[];
  addToCart: (clickedItem: CartItemsType) => void;
  removeCartItem: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeCartItem }) => {
  const calculteToatl = (items: CartItemsType[]) => {
    return items
      .reduce((ack: number, item) => ack + item.amount * item.price, 0)
      .toFixed(2);
  };
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No item in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeCartItem={removeCartItem}
        />
      ))}
      <h2>Total: ${calculteToatl(cartItems)}</h2>
    </Wrapper>
  );
};

export default Cart;
