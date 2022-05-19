import React, { useState } from 'react';
import styles from "./global.css"
const SearchForm = ({ onSearch }) => {

    const [searchString, setSearchString] = useState('');

    return (
        <form onSubmit={onSearch}>
            <div className="input-group mb-3 mt-4">
                <input name='search' type="text" className="form-control rounded  col-12" placeholder="Movie" value={searchString}
                onChange ={e => setSearchString(e.target.value)} />
                <button className="border-0 mt-2 rounded bgYellow p-1  col-12" type="submit" id="button-addon2" 
                disabled={!searchString}>Search</button>
            </div>
        </form>
    )
}

export default SearchForm;