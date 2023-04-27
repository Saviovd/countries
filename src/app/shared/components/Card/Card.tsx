import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import { CardStyle } from './styles'

interface ICardProps {
    key: string
    country_props: {
        name: string
        flag: string
        population: number
        region: string
        capital: string
    }
}

export const Card = ({ country_props, key }: ICardProps | any): ReactElement => {

    const { name, flag, population, region, capital} = country_props

    return (<>
        <CardStyle>
            <Link to={`/${name.replace(/\s+/g, '')}`}>
                <div key={key} className='country'>
                    <img className='country_flag' src={flag} alt={`Flag of ${name}`} />
                    <div className='country_infos'>
                        <h3 className='country_name'>{name}</h3>
                        <p className="country_population">population:<span className='country_data'> {population.toLocaleString('en')}</span></p>
                        <p className="country_region">region:<span className='country_data'> {region}</span></p>
                        <p className="country_capital">capital:<span className='country_data'> {capital}</span></p>
                    </div>
                </div>
            </Link>
        </CardStyle> 
    </>)
}