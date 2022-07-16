import Container from "../../components/Container";
import { IMakePartialRepresentation } from "../../interfaces/api";

interface IProfileCard {
  provider: IMakePartialRepresentation;
}

function ProfileCard({ provider }: IProfileCard) {
  return (
    <Container>
      <div>AVATAR</div>
      {provider.name}
      {provider.title}
      {provider.bio}
      {provider.availabilty}
    </Container>
  );
}

export default ProfileCard;
