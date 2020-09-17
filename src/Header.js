import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import WorldIcon from '@material-ui/icons/Public'
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Link to="/">
                <img src="https://i.ibb.co/qFtt5ZJ/5f60bb531c9e3.png" alt=""/>
                </Link>
             
            </div>
            <div className="header_center">
                <p className="header_links">Places To Stay</p>
                <p className="header_links">Experiences</p>
                <p className="header_links">Online Experiences</p>

            </div>
            <div className="header_right">
                <div className="header_right_host">
                <p>Become a host</p>
                </div>
                <div className="header_right_lang">
                <WorldIcon />
                <ExpandMore/>
                </div>
                <div className="header_right_user">
                    <MenuIcon/>
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header
