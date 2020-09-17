import React,{useState,useEffect} from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from 'react-date-range';

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showSearch, setShowSearch] = useState(false);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <div className="search_container">
                <div className="search_column">
                    <small>Location</small>
                    <input type="text" placeholder="Where are you going?"/>
                </div>
                <div className="search_column">
                    <small>Check in</small>
                    <input type="text" placeholder="Add dates" onClick={ () =>{setShowSearch(!showSearch)}} value={startDate.toDateString()}/>
                </div>
                <div className="search_column">
                    <small>Check out</small>
                    <input type="text" placeholder="Add dates" onClick={ () =>{setShowSearch(!showSearch)}} value={endDate.toDateString()}/>
                </div>
                <div className="search_column">
                    <small>Guests</small>
                    <input type="text" placeholder="Add guests"/>
                </div>
                <div className="search_icon_right">
                    <SearchIcon />
                </div>
            </div>
            <div className="search_date_picker">
                {
                    showSearch &&
                    <DateRange ranges={[selectionRange]} onChange={handleSelect}/>
                }
            </div>

        </div>
    )
}

export default Search
