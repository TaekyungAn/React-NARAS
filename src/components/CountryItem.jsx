/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import style from "./CountryItem.module.css";
export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
}) {
  const nav = useNavigate();
  const onClickItem = () => {
    nav(`/country/${code}`);
  };
  return (
    <div onClick={onClickItem} className={style.container}>
      <img
        className={style.flag_img}
        src={flagImg}
        alt={`${commonName}의 국기 이미지입니다.`}
      />
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(", ")}</div>
        <div>인구 : {population}</div>
      </div>
    </div>
  );
}
