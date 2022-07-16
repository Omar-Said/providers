import React from "react";
import * as Styles from "./Container.styles";
import { ContainerProps } from "./Container.types";

const Container: React.FC<ContainerProps> = ({ color = "white", children }) => {
  return <Styles.Root color={color}>{children}</Styles.Root>;
};

export default Container;
