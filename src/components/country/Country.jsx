import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const { name, cca3, flags, population, area, region } = country;
    console.log(country);
    const [visited, setVisited] = useState(false);
    // conditional rendering
    const handleVisited = () => {
        setVisited(!visited);
    }
    const passWithParams = () => {
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'Non visited'}`}>
            <h2 style={{ color: visited ? 'purple' : 'white' }}>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Populations : {population}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p><span>Code : {cca3}</span></p>
            <button onClick={passWithParams}>Marks Visited</button>
            <br />
            <button onClick={handleVisitedFlag}>Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i have visited ' : 'No have not visited'}
        </div>
    );
};

export default Country;