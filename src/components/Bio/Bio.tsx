import Typography from "../Typography";

interface IBio {
  name: string;
  title: string;
  occupation: string;
  bio: string;
  isReadLess: boolean;
}

function Bio({ name, title, occupation, bio, isReadLess }: IBio) {
  return (
    <>
      <Typography
        color={"#1C1E24"}
        fontWeight={500}
        fontSize={18}
        lineHeight={21.6}
      >
        {name}, {title}
      </Typography>
      <Typography
        color={"#6E7178"}
        fontWeight={500}
        fontSize={14}
        lineHeight={16.8}
        marginTop={6}
        marginBottom={12}
      >
        {occupation}
      </Typography>
      <Typography
        color={"#6E7178"}
        fontWeight={400}
        fontSize={14}
        lineHeight={19.6}
        marginTop={6}
        ellipsis={isReadLess}
      >
        {bio}
      </Typography>
    </>
  );
}

export default Bio;
