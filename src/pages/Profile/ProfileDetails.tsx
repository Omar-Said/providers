import React from "react";
import FlexWrapper from "../../components/FlexWrapper";
import Typography from "../../components/Typography";
import * as Styles from "./ProfileDetails.styles";

interface IProfileCard {
  icon: string;
  detail: string;
}

function ProfileDetails({ detail, icon }: IProfileCard) {
  return (
    <FlexWrapper marginTop={16}>
      <Styles.ProfileDetails>
        <img src={icon} alt="arrow icon" />
      </Styles.ProfileDetails>
      <FlexWrapper flexDirection={"column"} marginLeft={16}>
        <Typography
          fontSize={12}
          lineHeight={14.4}
          color={"#6F737A"}
          fontWeight={400}
          marginTop={6}
        >
          Location
        </Typography>
        <Typography
          fontSize={14}
          lineHeight={16.8}
          color={"#3F4145"}
          fontWeight={500}
          marginTop={6}
        >
          {detail}
        </Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default ProfileDetails;
