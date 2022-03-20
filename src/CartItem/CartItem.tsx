import React from "react";
import { CartItemsType } from "../App";
import { Wrapper } from "./CartItem.style";
import Button from "@material-ui/core/Button";
type Props = {
  item: CartItemsType;
  addToCart: (clickedItem: CartItemsType) => void;
  removeCartItem: (id: number) => void;
};
const CartItem: React.FC<Props> = ({ item, addToCart, removeCartItem }) => {
  return (
    <Wrapper>
      <div className="cardInfoContainer">
        <h3>{item.title}</h3>
        <div className="cardInfo">
          <p>Price ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeCartItem(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
