import { Wrap } from "./shopItem.styled";
import { useShop } from "../../context";

const ShopItem = ({ data }) => {
  const { chooseShop } = useShop();

  return (
    <Wrap to={`/${data.id}`} onClick={() => chooseShop(data)}>
      {data.name}
    </Wrap>
  );
};

export default ShopItem;
