import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { fetchProvider } from "../../api";
import { IMakeFullRepresentation } from "../../interfaces/api";

function Profile() {
  const [provider, setProvider] = useState<IMakeFullRepresentation>();
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
  return (
    <div>
      <Helmet>
        <title>Provider Profile</title>
      </Helmet>
      Profile
      {provider?.name}
      {provider?.title}
    </div>
  );
}

export default Profile;
