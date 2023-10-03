import React from 'react';
import "./Search.scss";
// import { useSelector } from 'react-redux';


// const data = useSelector(getSelectedMovieOrShow);

const Search = () => {
    return (
        <div className="search-container">
            <label className="search-wrapper">
            <input type="text" className="input-search" placeholder="Search a Movie"/>
            </label>
            <img src="https://www.citypng.com/public/uploads/preview/download-blue-search-icon-button-png-11640084027s0fkuhz2lb.png" className="search-icon" alt=""/>

            
                
        </div>
    );
};

export default Search;