import React, { ReactNode } from "react";
import styled from "styled-components";

interface ResultContainerProps {
  children?: ReactNode;
}

const ResultContainer: React.FC<ResultContainerProps> = ({ children }) => {
  return <StyledResultContainer>{children}</StyledResultContainer>;
};

const StyledResultContainer = styled.div`
  margin: 0 auto;
  max-width: 240px;
`;

export default ResultContainer;
