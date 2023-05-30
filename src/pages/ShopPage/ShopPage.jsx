import { Container } from "./shopPage.styled";
import { nanoid } from "nanoid";
import { useShop } from "../../context";
import comp from "../../components";

const ShopPage = () => {
  const { shop } = useShop();

  return (
    <Container>
      {shop.menu.map((item) => (
        <comp.ShopMenuItem key={nanoid()} data={item} />
      ))}
    </Container>
  );
};

export default ShopPage;
