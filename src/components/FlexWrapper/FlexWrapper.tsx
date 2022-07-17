import React from "react";
import * as Styles from "./FlexWrapper.styles";
import { FlexWrapperProps } from "./FlexWrapper.types";

const FlexWrapper: React.FC<FlexWrapperProps> = ({
  flexDirection = "row",
  marginLeft = 0,
  marginTop = 0,
  marginBottom = 0,
  marginRight = 0,
  alignItems = "flex-start",
  children,
}) => {
  return (
    <Styles.Root
      flexDirection={flexDirection}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      alignItems={alignItems}
    >
      {children}
    </Styles.Root>
  );
};

export default FlexWrapper;
