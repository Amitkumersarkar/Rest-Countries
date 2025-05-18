import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountries = (country) => {
        console.log("at this country");
        // declared spread operator to copy new array
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }
    const handleVisitedFlag = (flag) => {
        console.log('added flags');
        const newFlags = [...visitedFlags, flag];
        setVisitedFlags(newFlags);

    }
    return (
        <>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h4>Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country2">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
        </>
    );
};

export default Countries;