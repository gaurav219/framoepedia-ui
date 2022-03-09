import React from "react";
import Button from "../Button";
import "./input.css";
import Card from "../Card/index";

interface InputProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 10 | 20 | 30 | 50;
  label: string;
  onClick?: () => void;
  onChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */

const Input = (props: InputProps) => {
  // const props = props;a
  return (
    <>
      <Card label="primary" />
      <input
        type="text"
        size={props.size}
        placeholder={props.primary ? "Hello Primary" : "Hello Viki"}
      />
    </>
  );
};

export default Input;
