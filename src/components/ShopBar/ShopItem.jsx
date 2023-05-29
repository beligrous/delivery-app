import { createContext } from "react";
import { Wrap } from "./shopItem.styled";

let choosenShop = null;

const ShopItem = ({ data }) => {
  return <Wrap to={`/${data.id}`}>{data.name}</Wrap>;
};

export default ShopItem;
export const shopContext = createContext(choosenShop);
