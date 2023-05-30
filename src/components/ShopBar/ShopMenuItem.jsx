import { Image, Container, Button } from "./shopMenuItem.styled";

const ShopMenuItem = ({ data }) => {
  return (
    <Container>
      <Image>{data.image}</Image>
      <p>{data.name}</p>
      <Button>Add to Cart</Button>
    </Container>
  );
};

export default ShopMenuItem;
