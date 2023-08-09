import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonContainerProps {
  children?: ReactNode;
}

const Backgroud: React.FC<ButtonContainerProps> = ({ children }) => {
  return <StyledButtonContainer>{children}</StyledButtonContainer>;
};

const StyledButtonContainer = styled.div`
  width: 240px;
  height: 240px;
  margin: 0 auto;
  margin-top: 70px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Backgroud;
