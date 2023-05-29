import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled(Link)`
  display: block;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px 10px;
  text-decoration: none;
  color: #000;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
