import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProviders } from "../../api";
import { IMakePartialRepresentation } from "../../interfaces/api";
import ProfileCard from "./ProfileCard";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { provinceByAbbr } from "../../utils/provinces";

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
    <div>
      <Helmet>
        <title>Provider Directory</title>
      </Helmet>
      <Header
        onSelectProvince={handleSelectProvince}
        selectedProvince={selectedProvince}
      />
      <p>{providers.length}</p>
      <p>providers in Ontario</p>
      directory
      {providers.length > 0 &&
        filterProviders().map((provider) => (
          <div key={provider.id}>
            <Link to={`/profile/${provider.id}`}>Profile</Link>
            <ProfileCard provider={provider} />
          </div>
        ))}
    </div>
  );
}
