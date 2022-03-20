import { useState } from "react";
import { useQuery } from "react-query";
import Item from "./item/Item";
import Cart from "./Cart/Cart";
import Drawer from "@material-ui/core/Drawer";

import LinerProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Wrapper, StyledButton } from "./App.style";

export type CartItemsType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemsType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

console.log(getProducts);

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemsType[]);
  const { data, isLoading, error } = useQuery<CartItemsType[]>(
    "product",
    getProducts
  );

  console.log(data);
  const getTotalItem = (items: CartItemsType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemsType) => {
    setCartItems((prev) => {
      //1. Is the item already added in the cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  console.log(cartItems);

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemsType[])
    );
  };

  if (isLoading) return <LinerProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeCartItem={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton
        onClick={() => setCartOpen(true)}
        color="primary"
        aria-label="add to shopping cart"
      >
        <Badge badgeContent={getTotalItem(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={4}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={() => handleAddToCart(item)} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
