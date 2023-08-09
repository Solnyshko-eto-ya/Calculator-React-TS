import React, { ReactNode } from "react";
import styled from "styled-components";

interface BackgroudProps {
  children?: ReactNode;
}

const Backgroud: React.FC<BackgroudProps> = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>;
};

const StyledBackground = styled.div`
  user-select: none;
  height: 500px;
  width: 300px;
  position: absolute;
  top: 20%;
  left: 40%;
  background-color: #363636;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export default Backgroud;
