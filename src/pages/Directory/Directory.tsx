import { useEffect, useState } from "react";
import { fetchProviders } from "../../api";
import { IMakePartialRepresentation } from "../../interfaces/api";
import ProfileCard from "./ProfileCard";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { provinceByAbbr } from "../../utils/provinces";
import * as Styles from "./Directory.styles";
import Typography from "../../components/Typography";

const DEFAULT_PROVINCE = "ON";

export default function Directory() {
  const [providers, setProviders] = useState<IMakePartialRepresentation[]>([]);
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

  useEffect(() => {
    const loadProviders = async () => {
      const data = await fetchProviders();
      setProviders(data);
    };
    loadProviders();
  }, []);

  return (
    <Styles.Root>
      <Helmet>
        <title>Provider Directory</title>
      </Helmet>
      <Header
        onSelectProvince={handleSelectProvince}
        selectedProvince={selectedProvince}
      />
      <Styles.ProviderContainer>
        <div>
          <Typography
            fontSize={14}
            lineHeight={16.8}
            color={"#1C1E24"}
            fontWeight={500}
          >
            {providers.length}
          </Typography>
          <Typography
            fontSize={14}
            lineHeight={16.8}
            color={"#3F4145"}
            fontWeight={400}
          >
            providers in {provinceByAbbr(selectedProvince)}
          </Typography>

          {providers.length > 0 &&
            filterProviders().map((provider) => (
              <div key={provider.id}>
                <ProfileCard provider={provider} />
              </div>
            ))}
        </div>
      </Styles.ProviderContainer>
    </Styles.Root>
  );
}
