import { useState } from 'react'
import countries from '../../data/data.json'
import { Card } from '../../shared/components/Card/Card'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { Header } from '../../shared/components/Header/Header'
import { DashboardStyle } from './styles'


export const Dashboard = () => {

    const [inputCountryName, setInputCountryNme] = useState('')
    const [countryRegion, setCountryRegion] = useState('')
    const [country] = useState(countries)

    return (<>
        <Header />
        <DashboardStyle>
            <div className="dashboard_filters">
                <div className='search_country'><RxMagnifyingGlass className='magnifying_glass' /><input className='input_country' type="text" placeholder='Search for a country...' onChange={(e) => setInputCountryNme(e.target.value)}/></div>
                <select className='region_choice' onChange={(e) => {
                    setCountryRegion(e.target.value)
                }}>
                    <option value="Filter by Region" disabled selected hidden>Filter by Region</option>
                    <option value="Americas" className="region_option">Americas</option>
                    <option value="Africa" className="region_option">Africa</option>
                    <option value="Asia" className="region_option">Asia</option>
                    <option value="Europe" className="region_option">Europe</option>
                    <option value="Oceania" className="region_option">Oceania</option>
                    <option value="" className="region_option">Filter by Region</option>
                </select>
            </div>
            <div className='countries_container'>
                {country && 
                <>{
                    countries.map(country => {
                        if (country.name === inputCountryName || 
                            country.nativeName === inputCountryName || 
                            country.name.toLowerCase() === inputCountryName || 
                            country.name.toLocaleUpperCase() === inputCountryName ||
                            country.nativeName.toLowerCase() === inputCountryName || 
                            country.nativeName.toLocaleUpperCase() === inputCountryName
                        ){

                            return <Card key={country.name} country_props={country}/>

                        } else if (country.region === countryRegion) {

                            return <Card key={country.name} country_props={country}/>

                        } else if (inputCountryName === '' && countryRegion === '') {

                            return <Card key={country.name} country_props={country}/>

                        }
                    })
                }</>
                }
            </div>
        </DashboardStyle>
    </>)
}