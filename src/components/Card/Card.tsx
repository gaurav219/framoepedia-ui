import React from "react";
import "./card.css";

interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the Input be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Input contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  // handleClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Card = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: CardProps) => {
  const mode = primary
    ? "storybook-Card--primary"
    : "storybook-Card--secondary";
  return (
    <div className="app">
      <div className="text"></div>
      <h4>Sample Input</h4>
      <p>This is sample text.</p>
    </div>
  );
};

export default Card;
