import React from "react";
import styled, { css } from "styled-components";

export enum ButtonStyle {
  ORANGE,
  WHITE,
  BLUE
}

interface ButtonProps  {
  styleType: ButtonStyle;
  value: string,
  onClick: (value: string) => void;
  
}

const CustomButton: React.FC<ButtonProps> = ({
  
  styleType = ButtonStyle.WHITE,
  value,
  onClick
}) => {
  return <StyledButton onClick={()=> onClick(value)} $styleType={styleType}>{value}</StyledButton>;
};

const StyledButton = styled.button<{
  $styleType: ButtonStyle;
}>`
  border-radius: 15px;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border: none;
  color: black;
  font-size: 20px;
  margin: 5px;

  ${({ $styleType }) => {
    switch ($styleType) {
      case ButtonStyle.ORANGE:
        return css`
          background-color: #ec9b29;
          &:hover {
            background-color: #dc8e21;
          }
          &:active {
            height: 48px;
            width: 48px;
            transition: 0.5s;
            background-color: #d2861b;
          }
        `;
        case ButtonStyle.BLUE:
        return css`
          background-color: #29bbec;
          &:hover {
            background-color: #179ac5;
          }
          &:active {
            height: 48px;
            width: 48px;
            transition: 0.5s;
            background-color: #118ab3;
          }
        `;
      case ButtonStyle.WHITE:
        return css`
          background-color: #ffffff;
          &:hover {
            background-color: #cfcfcf;
          }
          &:active {
            height: 48px;
            width: 48px;
            transition: 0.5s;
            background-color: #949494;
          }
        `;
    }
  }}
`;

export default CustomButton;
