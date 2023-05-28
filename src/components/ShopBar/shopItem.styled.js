import styled from "styled-components";

export const Wrap = styled.button`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
`;
