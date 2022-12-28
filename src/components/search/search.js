import './Search.css';
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL,geoApiOptions } from '../../api';
 
const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <>
            <h1 className="search-tile">
                <span className="blue">W</span>
                <span className="red">o</span>
                <span className="yellow">o</span>
                <span className="blue">g</span>
                <span className="green">l</span>
                <span className="red">e</span>
            </h1>
            <AsyncPaginate 
                placeholder="Search for a city to get weather data"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </>
    );
}

export default Search;