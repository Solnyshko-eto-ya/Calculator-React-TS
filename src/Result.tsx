import React from "react";
import styled from "styled-components";

interface ResultProps {
  value: string;
}

const Result: React.FC<ResultProps> = ({ value }) => {
  return (
    <div>
      <StyledResult>результат:{value}</StyledResult>
    </div>
  );
};

const StyledResult = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 25px;
`;

export default Result;
