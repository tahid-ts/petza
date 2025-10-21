import { BaseComponentProps } from "./types";



export type ButtonVariant = "primary" | "secondary" | "outline" | "icon" | "iconOnly";

export type ButtonSize = 'none' | 'sm' | 'md' | 'lg';


export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}
