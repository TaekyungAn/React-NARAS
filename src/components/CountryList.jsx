/* eslint-disable react/prop-types */
import style from "./CountryList.module.css";
import CountryItem from "./CountryItem";

export default function CountryList({ countires }) {
  return (
    <div className={style.container}>
      {countires.map((country) => (
        <CountryItem {...country} key={country.code} />
      ))}
    </div>
  );
}

CountryList.defaultProps = {
  countires: [],
};
