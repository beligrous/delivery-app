import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const CartContainer = styled.div`
  margin: 20px 0;
  flex-grow: 1;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 20px;
`;

export const Form = styled.form`
  margin: 20px 0;
  padding: 20px;
  width: 450px;
  height: 500px;
  border: 1px solid #000;
  border-radius: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  padding: 5px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
