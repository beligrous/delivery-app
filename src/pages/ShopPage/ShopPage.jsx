import { Container } from "./shopPage.styled";
import { useShop } from "../../context";

const ShopPage = () => {
  const { shop } = useShop();

  return (
    <Container>
      {shop ? (
        shop.menu.map((item) => <p>{item}</p>)
      ) : (
        <p>Choose a shop, you want to make order</p>
      )}
    </Container>
  );
};

export default ShopPage;
