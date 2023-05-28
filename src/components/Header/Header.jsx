import { Container } from "./header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Link to={"/"}>Shop</Link>
      <Link to={"/cart"}>Shoping cart</Link>
    </Container>
  );
};

export default Header;
