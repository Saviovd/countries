import { useEffect, useState } from 'react';
import { Country } from '../../../../types/country';
import { getCountriesData } from '../../../../utils/getData';
import { Link } from 'react-router-dom';
import { BorderStyles } from './styles';

interface BordersProps {
  country: Country;
}

export const Borders = ({ country }: BordersProps) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const allCountries = await getCountriesData();
      if (allCountries) {
        setCountries(allCountries);
      }
    };

    fetchCountries();
  }, []);

  if (!country.borders || country.borders.length === 0) {
    return <p>No border countries</p>;
  }

  return (
    <BorderStyles>
      <p className='country_about'>Border countries:</p>
      {country.borders.map((borderCode) => {
        const borderCountry = countries.find(c => c.cca3 === borderCode);
        return borderCountry ? (
          <Link key={borderCountry.cca2} to={`/${borderCountry.cca2}`} className='country_border'>
            <span className='country_border-anchor'>{borderCountry.name.common}</span>
          </Link>
        ) : <span key={borderCode}>Not found</span>;
      })}
    </BorderStyles>
  );
};
