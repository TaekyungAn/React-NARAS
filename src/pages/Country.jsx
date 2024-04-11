import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountryDetails } from "../api";

export default function Country() {
  const params = useParams();

  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountryDetails(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  console.log(params);
  return <div>Country : {params.code}</div>;
}
