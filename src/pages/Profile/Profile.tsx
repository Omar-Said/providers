import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { fetchProvider } from "../../api";
import Typography from "../../components/Typography";
import { IMakeFullRepresentation } from "../../interfaces/api";
import arrowIcon from "../../assets/icons/arrowIcon.png";
import FlexWrapper from "../../components/FlexWrapper";
import * as Styles from "./Profile.styles";
import Avatar from "../../components/Avatar";
import Container from "../../components/Container";
import ReadLess from "../../assets/icons/readLess.png";
import LocationMarker from "../../assets/icons/locationMarker.svg";
import Education from "../../assets/icons/education.svg";
import Lanuage from "../../assets/icons/language.svg";

function Profile() {
  const [provider, setProvider] = useState<IMakeFullRepresentation>();
  const [isReadLess, setIsReadLess] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const loadProvider = async () => {
      const data = await fetchProvider(id || "");
      if (data) {
        setProvider(data);
      }
    };
    loadProvider();
  }, [id]);

  const handleReadLess = () => {
    setIsReadLess(!isReadLess);
    console.log("HELLO0", isReadLess);
  };
  return (
    <Styles.Root>
      <Helmet>
        <title>Provider Profile</title>
      </Helmet>
      <FlexWrapper alignItems={"center"} marginTop={24} marginBottom={23}>
        <Styles.HomeLink to={`/`}>
          <Typography
            color={"#6F737A"}
            fontWeight={400}
            fontSize={12}
            lineHeight={14.4}
          >
            Mental Wellness
          </Typography>
        </Styles.HomeLink>
        <img
          style={{
            height: "8px",
            width: "4.5px",
            color: "#C6C9CF",
            marginLeft: "8px",
            marginRight: "7.5px",
          }}
          src={arrowIcon}
          alt="arrow icon"
        />
        <Typography
          color={"#3F4145"}
          fontWeight={400}
          fontSize={12}
          lineHeight={14.4}
        >
          {provider?.name}, {provider?.title}
        </Typography>
      </FlexWrapper>
      <FlexWrapper>
        <Avatar
          imageSource={provider?.avatarUrl || ""}
          altText={"provider image"}
          height={289}
          width={289}
          borderRadius={0}
          padding={0}
        />
        <Container height={570} width={495} marginLeft={16} isFitContent>
          <Container
            height={267}
            width={495}
            borderBottom
            paddingLeft={32}
            paddingBottom={24}
            paddingRight={32}
            paddingTop={24}
            isFitContent
          >
            <Typography
              color={"#1C1E24"}
              fontWeight={500}
              fontSize={18}
              lineHeight={21.6}
            >
              {provider?.name}, {provider?.title}
            </Typography>
            <Typography
              color={"#6E7178"}
              fontWeight={500}
              fontSize={14}
              lineHeight={16.8}
              marginTop={6}
              marginBottom={12}
            >
              {provider?.occupation}
            </Typography>
            <Typography
              color={"#6E7178"}
              fontWeight={400}
              fontSize={14}
              lineHeight={19.6}
              marginTop={6}
              ellipsis={isReadLess}
            >
              {provider?.bio}
            </Typography>
            <Styles.ProfileWrapper onClick={handleReadLess}>
              <Typography
                color={"#6277F0"}
                fontWeight={500}
                fontSize={14.8}
                lineHeight={17.76}
                marginTop={16}
              >
                Read {isReadLess ? "more" : "less"}
                <img
                  style={{
                    marginLeft: "6px",
                    marginBottom: "3px",
                    transform: `${isReadLess ? "rotate(180deg)" : ""}`,
                  }}
                  src={ReadLess}
                  alt="arrow icon"
                />
              </Typography>
            </Styles.ProfileWrapper>
          </Container>
          <Container
            isFitContent
            height={570}
            width={495}
            paddingLeft={32}
            paddingBottom={24}
            paddingRight={32}
            paddingTop={24}
          >
            <FlexWrapper>
              <Styles.ProfileContainer>
                <img src={LocationMarker} alt="arrow icon" />
              </Styles.ProfileContainer>
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
                  {provider?.location}
                </Typography>
              </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper marginTop={16}>
              <Styles.ProfileContainer>
                <img src={Education} alt="arrow icon" />
              </Styles.ProfileContainer>
              <FlexWrapper flexDirection={"column"} marginLeft={16}>
                <Typography
                  fontSize={12}
                  lineHeight={14.4}
                  color={"#6F737A"}
                  fontWeight={400}
                  marginTop={6}
                >
                  Education
                </Typography>
                <Typography
                  fontSize={14}
                  lineHeight={16.8}
                  color={"#3F4145"}
                  fontWeight={500}
                  marginTop={6}
                >
                  {provider?.education}
                </Typography>
              </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper marginTop={16}>
              <Styles.ProfileContainer>
                <img src={Lanuage} alt="arrow icon" />
              </Styles.ProfileContainer>
              <FlexWrapper flexDirection={"column"} marginLeft={16}>
                <Typography
                  fontSize={12}
                  lineHeight={14.4}
                  color={"#6F737A"}
                  fontWeight={400}
                  marginTop={6}
                >
                  Language
                </Typography>
                <Typography
                  fontSize={14}
                  lineHeight={16.8}
                  color={"#3F4145"}
                  fontWeight={500}
                  marginTop={6}
                >
                  {provider?.languages.join(", ")}
                </Typography>
              </FlexWrapper>
            </FlexWrapper>

            <Styles.ProfileTag>
              <Typography
                fontSize={18}
                lineHeight={18}
                color={"#FFFFFF"}
                fontWeight={500}
              >
                Book with us
              </Typography>
            </Styles.ProfileTag>
          </Container>
        </Container>
      </FlexWrapper>
    </Styles.Root>
  );
}

export default Profile;
