import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";

export default function Search() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [countries, setCountires] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountires(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return <div>Search{searchParams.get("q")}</div>;
}
