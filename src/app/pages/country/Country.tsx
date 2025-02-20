import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Header } from '../../shared/components/Header/Header'
import { CountryStyle } from './styles'
import { useEffect, useState } from 'react'
import { Country as ICountry } from '../../../types/country'
import { Borders } from '../../shared/components/Borders'

export const Country = () => {
    const params = useParams()
    const [country, setCountry] = useState<ICountry>();

    const getCountryData = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.country}`);
        const data = await response.json();
        setCountry(data[0]);
    };

    useEffect(() => {
        setCountry(undefined)
        getCountryData();
    }, [params.country])

    return (<>
        <Header />
        <CountryStyle>
            <Link to="/" className='back'><span className='back_anchor'>Back</span></Link>
            {!country ? <div className='loading'>Loading...</div> : (
                <div className='country_box'>
                    <img className='country_flag' src={country.flags.svg} alt={`flag of ${country?.flags.alt}`} />
                    <div className='country_infos'>
                        <h2 className='country_name'>{country?.name.common}</h2>
                        <div className='country_datas'>
                            <p className="country_about">native name:
                                <span className="country_data"> {country?.name.nativeName ? country?.name.nativeName[Object.keys(country?.name.nativeName)[0]].common : "N/A"}</span>
                            </p>
                            <p className="country_about">population:
                                <span className="country_data">{country?.population.toLocaleString('pt')}</span>
                            </p>
                            <p className="country_about">region:
                                <span className="country_data">{country?.region}</span>
                            </p>
                            <p className="country_about">sub region:
                                <span className="country_data">{country?.subregion}</span>
                            </p>
                            <p className="country_about">capital:
                                <span className="country_data">{country?.capital}</span>
                            </p>
                            <p className="country_about">top level domain:
                                {country?.tld.map((level, i) => <span key={i} className="country_data">{level}</span>)}
                            </p>
                            <p className="country_about">currencies:
                                {country?.currencies && Object.values(country?.currencies).map((currency: { name: string, symbol: string }, i: number) => (
                                    <span key={i} className="country_data">{currency.name} | {currency.symbol}</span>
                                ))}
                            </p>

                            <p className="country_about">languages:
                                {country?.languages
                                    ? Object.values(country?.languages).map((language, i) => (
                                        <span key={i} className="country_data">{language}</span>
                                    ))
                                    : "N/A"}
                            </p>
                        </div>
                        <Borders country={country} />
                    </div>
                </div>
            )}
        </CountryStyle>
    </>)
}