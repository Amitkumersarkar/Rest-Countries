import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountries = (country) => {
        console.log(country);
        
    }
    return (
        <>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h4>Visited Countries</h4>
            </div>
            <div className="country2">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;