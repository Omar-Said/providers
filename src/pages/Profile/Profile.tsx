import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProvider } from "../../api";
import Typography from "../../components/Typography";
import { IMakeFullRepresentation } from "../../api";
import arrowIcon from "../../assets/icons/arrowIcon.png";
import FlexWrapper from "../../components/FlexWrapper";
import * as Styles from "./Profile.styles";
import Avatar from "../../components/Avatar";
import Container from "../../components/Container";
import ReadLess from "../../assets/icons/ArrowIcon.svg";
import LocationMarker from "../../assets/icons/locationMarker.svg";
import Education from "../../assets/icons/education.svg";
import Language from "../../assets/icons/language.svg";
import Spinner from "../../components/Spinner/Spinner";
import Details from "../../components/Details/Details";
import Bio from "../../components/Bio/Bio";
import TabTitle from "../../components/Helmet/Helmet";

function Profile() {
  const [provider, setProvider] = useState<IMakeFullRepresentation>();
  const [isReadLess, setIsReadLess] = useState<boolean>(false);
  const [error, setArror] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const loadProvider = async () => {
      try {
        const data = await fetchProvider(id || "");
        if (data) {
          setProvider(data);
        }
        setLoading(false);
      } catch (error: any) {
        console.error(error);
        setArror(error);
        setLoading(false);
      }
    };
    loadProvider();
  }, [id]);

  const handleReadLess = () => {
    setIsReadLess(!isReadLess);
  };

  let returnedComponent;

  if (provider) {
    returnedComponent = (
      <>
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
            imageSource={`../images/${provider?.avatarUrl}` || ""}
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
              <Bio
                name={provider?.name}
                title={provider?.title}
                occupation={provider?.occupation}
                bio={provider?.bio}
                isReadLess={isReadLess}
              />
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
              paddingTop={8}
            >
              <Details
                icon={LocationMarker}
                detail={provider?.location || ""}
                title="Location"
              />
              <Details
                icon={Education}
                detail={provider?.education || ""}
                title="Education"
              />
              <Details
                icon={Language}
                detail={provider?.languages.join(", ") || ""}
                title="Language"
              />
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
      </>
    );
  } else {
    returnedComponent = <Styles.ProfileError>{error}</Styles.ProfileError>;
  }
  return (
    <Styles.Root>
      <TabTitle title="Provider Profile" />
      {!loading ? <>{returnedComponent}</> : <Spinner />}
    </Styles.Root>
  );
}

export default Profile;
