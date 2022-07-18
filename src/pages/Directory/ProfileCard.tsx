import Container from "../../components/Container";
import Typography from "../../components/Typography";
import Avatar from "../../components/Avatar";
import FlexWrapper from "../../components/FlexWrapper";
import { IMakePartialRepresentation } from "../../api";
import * as Styles from "./ProfileCard.styles";

interface IProfileCard {
  provider: IMakePartialRepresentation;
}

function ProfileCard({ provider }: IProfileCard) {
  return (
    <Styles.ProfileLink to={`/profile/${provider.id}`}>
      <Container
        height={167}
        width={598}
        paddingTop={10}
        paddingLeft={16}
        paddingBottom={14}
        paddingRight={16}
        marginTop={6}
      >
        <FlexWrapper>
          <Avatar
            imageSource={`../images/${provider.avatarUrl}`}
            altText="provider image"
            height={56}
            width={56}
            borderRadius={50}
            padding={2}
          />
          <FlexWrapper flexDirection={"column"} marginLeft={12} marginTop={7.5}>
            <Typography
              fontSize={16}
              lineHeight={19.2}
              color={"#1C1E24"}
              fontWeight={500}
              marginBottom={6}
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
          </FlexWrapper>
        </FlexWrapper>
        <Typography
          fontSize={14}
          lineHeight={19.6}
          color={"#6E7178"}
          fontWeight={400}
          marginTop={10}
          ellipsis
        >
          {provider.bio}
        </Typography>

        <Styles.ProfileTag>
          <Typography
            fontSize={12}
            lineHeight={13.2}
            color={"#3F4145"}
            fontWeight={500}
          >
            Available {provider.availabilty}
          </Typography>
        </Styles.ProfileTag>
      </Container>
    </Styles.ProfileLink>
  );
}

export default ProfileCard;
