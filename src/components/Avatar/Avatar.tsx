import * as Styles from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

const Avatar = ({
  imageSource,
  altText,
  height,
  width,
  padding,
  borderRadius,
}: AvatarProps) => {
  return (
    <Styles.Root
      src={imageSource}
      alt={altText}
      height={height}
      width={width}
      padding={padding}
      borderRadius={borderRadius}
    />
  );
};

export default Avatar;
