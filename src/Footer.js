import React from 'react';
import './Footer.css';
import WorldIcon from '@material-ui/icons/Public';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_row">
            <div className="footer_column">
                <h5 className="footer_column_header">ABOUT</h5>
                <small>News</small>
                <small>Careers</small>
            </div>
            <hr/>
            <div className="footer_column">
                <h5 className="footer_column_header">COMMUNITY</h5>
                <small>Diversity & Belonging</small>
                <small>Against Discrimination</small>
                <small>Accesibility</small>
                <small>Invite Friends</small>
                <small>Gift Cards</small>
            </div>
            <hr/>
            <div className="footer_column">
            <h5 className="footer_column_header">SUPPORT</h5>
                <small>Updates for COVID-19</small>
                <small>Help Center</small>
                <small>Neighborhood Support</small>
                <small>Trust & Safety</small>
            </div>
            </div>
            <div className="footer_sub_text">
                <div className="footer_sub_column">
                    <div className="footer_sub_row">
                    <span>&#169;</span>
                    <p>2020 VALACED, Inc. All rights Reserved</p>
                    <span>&#183;</span>
                    <p>Privacy</p>
                    <span>&#183;</span>
                    <p>Terms</p>
                    <span>&#183;</span>
                    <p>Sitemap</p>
                    </div>

                </div>
                <div className="footer_sub_column">
                    <div className="footer_sub_row center">
                    <WorldIcon /> <span style={{fontSize:"14px", borderBottom:"2px solid black",fontWeight:"500"}}>English(US)</span>
                    <MoneyIcon /> <span style={{borderBottom:"2px solid black",fontWeight:"500"}}>USD</span>
                    </div>

                </div>
                <div className="footer_sub_column">
                    <div className="footer_sub_row">
                    <FacebookIcon className="sub_Icon" />
                    <TwitterIcon className="sub_Icon"/>
                    <InstagramIcon className="sub_Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
