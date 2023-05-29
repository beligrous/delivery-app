import { Outlet } from "react-router-dom";
import comp from "../../components";
import { Container } from "./homePage.styled";

const Home = () => {
  return (
    <Container>
      <comp.ShopBar />
      <Outlet />
    </Container>
  );
};

export default Home;
