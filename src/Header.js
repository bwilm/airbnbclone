import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import WorldIcon from '@material-ui/icons/Public'
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';



function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://i.ibb.co/488xSR1/shoelogo.png" alt=""/>
            </div>
            <div className="header_center">
                <p className="header_links title">VA LACED</p>
                <p className="header_links">New Releases</p>
                <p className="header_links">On Sale</p>
                <p className="header_links">About</p>

            </div>
        </div>
    )
}

export default Header
