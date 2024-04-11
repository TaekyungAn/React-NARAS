/* eslint-disable react/prop-types */
import style from "./CountryList.module.css";
import CountryItem from "./CountryItem";

export default function CountryList({ countries }) {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem {...country} key={country.code} />
      ))}
    </div>
  );
}

CountryList.defaultProps = {
  countires: [],
};
