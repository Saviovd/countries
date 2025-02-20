import { ChangeEvent } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FilterStyles } from "./styles";

interface FiltersProps {
  inputCountryName: string;
  countryRegion: string;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRegionChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Filters = ({ inputCountryName, countryRegion, onNameChange, onRegionChange }: FiltersProps) => {
  return (
    <FilterStyles>
      <div className="search_country">
        <RxMagnifyingGlass className="magnifying_glass" />
        <input
          className="input_country"
          type="text"
          placeholder="Search for a country..."
          value={inputCountryName}
          onChange={onNameChange}
        />
      </div>

      <select className="region_choice" value={countryRegion} onChange={onRegionChange}>
        <option value="" disabled hidden>Filter by Region</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </FilterStyles>
  );
};
