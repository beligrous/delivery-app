import { Container } from "./shopBar.styled";
import shops from "../../shops";
import ShopItem from "./ShopItem";

const ShopBar = () => {
  return (
    <Container>
      {shops.map((item) => (
        <ShopItem key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default ShopBar;
