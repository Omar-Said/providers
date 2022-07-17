import React from "react";
import * as Styles from "./Container.styles";
import { ContainerProps } from "./Container.types";

const Container: React.FC<ContainerProps> = ({
  color = "white",
  height = 0,
  width = 0,
  paddingLeft = 0,
  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  borderBottom = false,
  isFitContent = false,
  children,
}) => {
  return (
    <Styles.Root
      color={color}
      height={height}
      width={width}
      paddingLeft={paddingLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      borderBottom={borderBottom}
      isFitContent={isFitContent}
    >
      {children}
    </Styles.Root>
  );
};

export default Container;
