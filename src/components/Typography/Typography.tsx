import React from "react";
import * as Styles from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

const Typography: React.FC<TypographyProps> = ({
  color = "#1C1E24",
  fontSize = 16,
  fontWeight = 400,
  capitalize = false,
  textAlignCenter = false,
  lineHeight = fontSize * 1.2,
  marginBottom = 0,
  children,
}) => {
  return (
    <Styles.Root
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      capitalize={capitalize}
      textAlignCenter={textAlignCenter}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
    >
      {children}
    </Styles.Root>
  );
};

export default Typography;
