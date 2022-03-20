import { CartItemsType } from "../App";
import { Wrapper, ProductInfo } from "./Item.style";

type Props = {
  item: CartItemsType;
  handleAddToCart: (clickedItem: CartItemsType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <ProductInfo>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </ProductInfo>
    <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
  </Wrapper>
);

export default Item;
