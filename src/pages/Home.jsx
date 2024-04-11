import { useEffect, useState } from "react";
import { fetchCountires } from "../api";

export default function Home() {
  const [countires, setCountires] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountires();
    setCountires(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return <div>Home</div>;
}
