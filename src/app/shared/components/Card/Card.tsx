import { Link } from 'react-router-dom'
import { CardStyle } from './styles'
import { Country } from '../../../../types/country'

interface CardProps {
    country: Country;
}

export const Card: React.FC<CardProps> = ({ country }) => {

    return (<>
        <Link to={`/${country.cca2}`}>
            <CardStyle>
                <img className='country_flag' src={country.flags.svg} alt={`Flag of ${country.flags.alt}`} />
                <div className='country_infos'>
                    <h3 className='country_name'>{country.name.common}</h3>
                    <p className="country_population">population:<span className='country_data'> {country.population.toLocaleString('pt')}</span></p>
                    <p className="country_region">region:<span className='country_data'> {country.region}</span></p>
                    <p className="country_capital">capital:<span className='country_data'>{country.capital}</span></p>
                </div>
            </CardStyle>
        </Link>
    </>)
}