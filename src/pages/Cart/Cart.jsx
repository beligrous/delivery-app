import shops from "../../shops";
import { Form, Input, Label, Container, CartContainer } from "./cart.styled";
import comp from "../../components";

const Cart = () => {
  return (
    <Container>
      <Form>
        <Label>
          Name
          <Input type="text" placeholder="name" />
        </Label>
        <Label>
          Email
          <Input type="email" placeholder="email" />
        </Label>
        <Label>
          Phone
          <Input type="text" placeholder="phone" />
        </Label>
        <Label>
          Address
          <Input type="text" placeholder="address" />
        </Label>
      </Form>
      <CartContainer>
        {shops.map((item) => (
          <comp.CartItem key={item.id} data={item.name} />
        ))}
        <button>submit</button>
      </CartContainer>
    </Container>
  );
};

export default Cart;
