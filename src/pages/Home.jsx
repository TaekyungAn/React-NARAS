import { useEffect, useState } from "react";
import { fetchCountires } from "../api";
import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";
import style from "./Home.module.css";

export default function Home() {
  const [countires, setCountires] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountires();
    setCountires(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList countires={countires} />
    </div>
  );
}
