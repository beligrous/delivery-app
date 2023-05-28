import { Wrap, Title } from "./shopItem.styled";

const ShopItem = ({ data }) => {
  return (
    <Wrap>
      <Title>{data.name}</Title>
    </Wrap>
  );
};

export default ShopItem;
