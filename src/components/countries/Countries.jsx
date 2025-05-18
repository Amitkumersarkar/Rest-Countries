import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <>
            <h2>Countries : {countries.length}</h2>
            <div className="country2">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;