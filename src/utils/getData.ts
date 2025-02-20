import { Country } from "../types/country";

export const getCountriesData = async (
) => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data: Country[] = await response.json();
    return data
  } catch (error) {
    console.error(`erro ao buscar dados`)
  }
};