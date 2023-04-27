import { Link } from 'react-router-dom'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import { Header } from '../../shared/components/Header/Header'
import { CountryStyle } from './styles'


export const Country = () => {
    const params = useParams()
    const country = data.find((country) => {
        if (country.name.replace(/\s+/g, '') === params.country) {
            return country
        }
    })
    return (<>
        <Header />
        <CountryStyle>
            <section className='country_container'>
                <Link to="/" className='back'><span className='back_anchor'>Back</span></Link>
                <div className='country_box'>
                    <img className='country_flag' src={country?.flag} alt={`flag of ${country?.name}`} />
                    <div className='country_infos'>
                        <h2 className='country_name'>{country?.name}</h2>
                        <div className='country_datas'>
                            <p className="country_about">native name:
                                <span className="country_data">{country?.nativeName}</span>
                            </p>
                            <p className="country_about">population:
                                <span className="country_data">{country?.population.toLocaleString('en')}</span>
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
                                {country?.topLevelDomain.map(level => <span className="country_data">{level}, </span>)}
                            </p>
                            <p className="country_about">currencies: 
                                {country?.currencies?.map(currencie => <span className="country_data">{currencie.name}, </span>)}
                            </p>
                            <p className="country_about">languages: 
                                {country?.languages.map(lenguage => <span className="country_data">{lenguage.name}, </span>)}
                            </p>
                        </div>
                        <div className='countries_border'>
                            <p className='country_about'>border countries: </p>
                        {
                            country?.borders?.map(border => {
                                const country = data.find(country => country.alpha3Code === border)
                                if (country?.alpha3Code === border) {
                                    return (<Link to={`/${country.name.replace(/\s+/g, '')}`} className='country_border'><span key={country.alpha2Code} className='country_border-anchor'>{country.name}</span></Link>)
                                } else {
                                    return <h2>not found</h2>
                                }
                            })  
                        }
                        </div>
                    </div>
                </div>
                
            </section>
        </CountryStyle>
    </>)
}