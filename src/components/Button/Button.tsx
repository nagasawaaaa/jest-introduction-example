import type { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<'button'>{
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
}

export default Button;
