import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  gap: 60px;
  padding: 20px 0;
  border-bottom: 2px solid;
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: #000;
  &.active {
    color: red;
    text-decoration: underline;
  }
`;
