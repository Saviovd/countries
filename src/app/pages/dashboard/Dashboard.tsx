import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "../../shared/components/Card/Card";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Header } from "../../shared/components/Header/Header";
import { DashboardStyle } from "./styles";
import { Country } from "../../../types/country";
import { Filters } from "../../shared/components/Filters/Index";
import { getCountriesData } from "../../../utils/getData";

export const Dashboard = () => {
    const [inputCountryName, setInputCountryName] = useState("");
    const [countryRegion, setCountryRegion] = useState("");
    const [countriesList, setCountriesList] = useState<Country[]>([]);
    const [filteredList, setFilteredList] = useState<Country[]>([]);

    const filterCountries = (name: string, region: string) => {
        let filtered = countriesList;

        if (name) {
            const searchValue = name.toLowerCase();
            filtered = filtered.filter((country) => {
                const commonNameMatch = country.name.common.toLowerCase().includes(searchValue);
                const nativeNameMatch = Object.values(country.name.nativeName || {}).some((native) =>
                    native.common.toLowerCase().includes(searchValue)
                );
                return commonNameMatch || nativeNameMatch;
            }).sort((a, b) => {
                const aStarts = a.name.common.toLowerCase().startsWith(searchValue) ? -1 : 1;
                const bStarts = b.name.common.toLowerCase().startsWith(searchValue) ? -1 : 1;
                return aStarts - bStarts || a.name.common.localeCompare(b.name.common);
            });
        }

        if (region) {
            const searchRegion = region.toLowerCase();
            filtered = filtered.filter((country) => country.region.toLowerCase() === searchRegion);
        }

        setFilteredList(filtered);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setInputCountryName(newName);
        filterCountries(newName, countryRegion);
    };

    const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newRegion = e.target.value;
        setCountryRegion(newRegion);
        filterCountries(inputCountryName, newRegion);
    };

    useEffect(() => {
        const getCountries = async () => {
            if (countriesList.length === 0) {
                const data = await getCountriesData()
                if (data) {
                    setCountriesList(data);
                }
            }
        };

        getCountries();
    }, [])

    return (
        <>
            <Header />
            <DashboardStyle>
                <Filters
                    inputCountryName={inputCountryName}
                    countryRegion={countryRegion}
                    onNameChange={handleNameChange}
                    onRegionChange={handleRegionChange}
                />
                <div className="countries_container">
                    <div className="countries_container">
                        {inputCountryName ? (
                            filteredList.length > 0 ? (
                                filteredList.map((country, i) => (
                                    <Card key={i} country={country} />
                                ))
                            ) : (
                                <div>Nenhum país encontrado</div>
                            )
                        ) : (
                            countriesList.map((country, i) => (
                                <Card key={i} country={country} />
                            ))
                        )}
                    </div>

                </div>
            </DashboardStyle>
        </>
    );
};
