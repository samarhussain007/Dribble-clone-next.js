import { MouseEventHandler } from "react";

type Props = {
  title: string;
  type: string;
  leftIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
};

const Button = ({ title, type, leftIcon, isSubmitting }: Props) => {
  return <div>Button</div>;
};

export default Button;
