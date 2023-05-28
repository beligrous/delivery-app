import { Container, PageLink } from "./header.styled";

const Header = () => {
  return (
    <Container>
      <PageLink to={"/"}>Shop</PageLink>
      <PageLink to={"/cart"}>Shoping cart</PageLink>
    </Container>
  );
};

export default Header;
