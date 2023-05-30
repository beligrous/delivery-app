import { Outlet } from "react-router-dom";
import { useShop } from "../../context";
import comp from "../../components";
import { Container } from "./homePage.styled";

const Home = () => {
  const shop = useShop();
  return (
    <Container>
      <comp.ShopBar />
      {shop ? <Outlet /> : <p>Choose a shop, you want to make order</p>}
    </Container>
  );
};

export default Home;
