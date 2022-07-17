import { ReactNode } from "react";

export interface ContainerProps {
  width?: number;
  height?: number;
  paddingLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  color?: string;
  borderBottom?: boolean;
  isFitContent?: boolean;
  children?: ReactNode;
}
