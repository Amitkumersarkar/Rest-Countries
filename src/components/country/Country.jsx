import { useState } from 'react';
import './Country.css';
const Country = ({ country }) => {
    const { name, cca3, flags, population, area, region } = country;
    console.log(country);
    const [visited, setVisited] = useState(false);
    // conditional rendering
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Populations : {population}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p><span>Code : {cca3}</span></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i have visited ' : 'No have not visited'}
        </div>
    );
};

export default Country;