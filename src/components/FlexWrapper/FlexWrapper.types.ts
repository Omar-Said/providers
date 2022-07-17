import { ReactNode } from "react";

export interface FlexWrapperProps {
  flexDirection?: string;
  marginLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  alignItems?: string;
  children?: ReactNode;
}
