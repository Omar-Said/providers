import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchProviders } from "../../api";
import { IMakePartialRepresentation } from "../../api";
import ProfileCard from "./ProfileCard";
import Header from "./Header";
import { provinceByAbbr } from "../../utils/provinces";
import * as Styles from "./Directory.styles";
import Typography from "../../components/Typography";
import FlexWrapper from "../../components/FlexWrapper";
import Spinner from "../../components/Spinner/Spinner";
import TabTitle from "../../components/Helmet/Helmet";

const DEFAULT_PROVINCE = "ON";

export default function Directory() {
  const [providers, setProviders] = useState<IMakePartialRepresentation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProvince, setSelectedProvince] =
    useState<string>(DEFAULT_PROVINCE);

  const filterProviders = () => {
    return providers.filter((pr) =>
      pr.location.includes(provinceByAbbr(selectedProvince))
    );
  };

  const handleSelectProvince = (province: string) => {
    setSelectedProvince(province);
  };

  const loadProviders = useCallback(async () => {
    const data = await fetchProviders();
    setProviders(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProviders();
  }, [loadProviders]);

  const provinceByAbbrevation = useMemo(() => {
    return provinceByAbbr(selectedProvince);
  }, [selectedProvince]);

  return (
    <Styles.Root>
      <TabTitle title="Provider Directory" />
      <Header
        onSelectProvince={handleSelectProvince}
        selectedProvince={selectedProvince}
      />
      {!loading ? (
        <Styles.ProviderContainer>
          <FlexWrapper marginTop={19} marginBottom={20}>
            <Typography
              fontSize={14}
              lineHeight={16.8}
              color={"#1C1E24"}
              fontWeight={500}
              marginRight={2}
            >
              {filterProviders()?.length}
            </Typography>
            <Typography
              fontSize={14}
              lineHeight={16.8}
              color={"#3F4145"}
              fontWeight={400}
            >
              providers in {provinceByAbbrevation}
            </Typography>
          </FlexWrapper>

          {providers.length > 0 &&
            filterProviders()?.map((provider) => (
              <div key={provider.id}>
                <ProfileCard provider={provider} />
              </div>
            ))}
        </Styles.ProviderContainer>
      ) : (
        <Spinner />
      )}
    </Styles.Root>
  );
}
