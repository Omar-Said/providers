import Container from "../../components/Container";
import Typography from "../../components/Typography";
import { IMakePartialRepresentation } from "../../interfaces/api";
import * as Styles from "./ProfileCard.styles";

interface IProfileCard {
  provider: IMakePartialRepresentation;
}

function ProfileCard({ provider }: IProfileCard) {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Styles.ProfileLink to={`/profile/${provider.id}`}>
      <Container>
        <img
          style={{
            height: "56px",
            marginRight: "56px",
            border: "1px solid #EEEEEE",
            borderRadius: "50%",
          }}
          src={provider.avatarUrl}
          alt="provider image"
        />
        <Typography
          fontSize={16}
          lineHeight={19.2}
          color={"#1C1E24"}
          fontWeight={500}
        >
          {provider.name}, {provider.title}
        </Typography>
        <Typography
          fontSize={12}
          lineHeight={14.4}
          color={"#6F737A"}
          fontWeight={400}
        >
          {provider.occupation}
        </Typography>
        <Typography
          fontSize={14}
          lineHeight={19.6}
          color={"#6F737A"}
          fontWeight={400}
          ellipsis
        >
          {provider.bio}
        </Typography>

        <Styles.ProfileTag>
          <Typography
            fontSize={12}
            lineHeight={19.6}
            color={"#3F4145"}
            fontWeight={500}
          >
            {capitalizeFirstLetter(provider.availabilty)}
          </Typography>
        </Styles.ProfileTag>
      </Container>
    </Styles.ProfileLink>
  );
}

export default ProfileCard;
