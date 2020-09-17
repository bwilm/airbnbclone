import React from 'react';
import "./SearchResult.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star';

function SearchResult({price,title,img,description,location,star,total}) {
    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchResult_heart" />
            <div className="searchResult_info">
            <div className="searchResult_info_top">
                <p>{location}</p>
                <p>{title}</p>
                <p className="searchResult_hor_seperator">______</p>

                <p>{description}</p>
            </div>
            <div className="searchResult_info_bottom">
                <div className="searchResult_stars">
                    <p>
                        <StarIcon className="searchResult_star" />
                        <strong>{star}</strong>
                    </p>
                </div>
                <div className="searchResult_price">
                    <p>{price}</p>
                </div>
            </div>
            </div>

        </div>
    )
}

export default SearchResult
