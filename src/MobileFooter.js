import React from 'react'
import './MobileFooter.css';
import Avatar from '@material-ui/core/Avatar/Avatar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHotjar} from '@fortawesome/free-brands-svg-icons/faHotjar';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons/faUserCircle';

function MobileFooter() {
    return (
        <div className="mobileFooter">
            <div className="mobileFooter_column">
                <FontAwesomeIcon icon={faHotjar} size="lg"/>
                <small >Whats Hot</small>
            </div>
            <div className="mobileFooter_column">
            <FontAwesomeIcon icon={faHeart} size="lg" />
                <small>Favorites</small>
            </div>
            <div className="mobileFooter_column">
            <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                <small>Log in</small>
            </div>
        </div>
    )
}

export default MobileFooter
