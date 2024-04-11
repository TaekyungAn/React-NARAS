import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const nav = useNavigate();
  const onClickHeader = () => {
    nav("/");
  };
  return (
    <div>
      <header onClick={onClickHeader} className={style.header}>
        <div>🌎NARAS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
