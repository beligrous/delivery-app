import { Container } from "./shopBar.styled";
import shops from "../../shops";
import comp from "..";

const ShopBar = () => {
  return (
    <Container>
      {shops.map((item) => (
        <comp.ShopItem key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default ShopBar;
