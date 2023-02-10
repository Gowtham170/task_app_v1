import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder, data }) => {

    const [filteredData, setFilteredData] = useState([]);
    const [show, setShow] = useState(false);

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
            setShow(false);
        } else {
            setFilteredData(newFilter);
            setShow(true);
        }

    };

    return (
        <div className='search'>
            <div className='search-inputs'>
                <input type='text' placeholder={placeholder} onChange={handleFilter} />
                <div className='search-icon'>
                    <i className='ri-search-line'></i>
                </div>
            </div>
            {
                (filteredData.length !== 0) 
                ?
                (<div className='data-result'>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return <div className='data-item btn' key={key}>{value.title}</div>
                    })}
                </div>)
                : 
                (show && <div className='data-noresult'>
                    <span>No task found</span>
                </div>)

            }
        </div>
    );
}

export default SearchBar;
