import React from "react";
import styled from "styled-components";
import { Input, InputProps } from "antd";

interface CustomInputProps extends InputProps {
  value?: string;
  disabled: boolean;
}

const InputNumbers: React.FC<CustomInputProps> = ({ value, disabled }) => {
  return (
    <StyledInputNumbers disabled={disabled} value={value}></StyledInputNumbers>
  );
};

const StyledInputNumbers = styled(Input)`
  caret-color: transparent;
  font-size: 20px;
  height: 50px;
  width: 100%;
  border: none;
  margin-top: 20px;
  border-radius: 15px;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
  &focus: {
    border-color: white;
  }
`;

export default InputNumbers;
