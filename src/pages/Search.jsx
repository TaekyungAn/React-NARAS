import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";
import Searchbar from "../components/Searchbar";
import CountryList from "../components/CountryList";
import style from "./Search.module.css";

export default function Search() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={style.container}>
      <Searchbar q={q} />
      <div>
        <b>{q}</b> 검색결과
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
