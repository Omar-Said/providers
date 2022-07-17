import { ReactNode } from "react";

export interface TypographyProps {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  capitalize?: boolean;
  textAlignCenter?: boolean;
  lineHeight?: number;
  marginBottom?: number;
  ellipsis?: boolean;
  marginTop?: number;
  marginRight?: number;
  children?: ReactNode;
}
