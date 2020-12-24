import React from 'react'
import './Body.css';

function Body() {
    return (
        <div className="body">
            <div className="body_text_container">
            <div className="body_mainText">
                <h2>VA LACED</h2>
                <h1>Custom Designs</h1> 
                <button><small>Explore Now</small></button>
            </div>
            </div>

            <div className="body_cards_container">
                <div className="body_cards_column">
                    <div className="body_card">
                        <div className="body_card_image">
                            <img src="https://i.ibb.co/z4Bq20p/cmx-BVwu-air-jordans-wallpaper.jpg" alt=""/>
                        </div>
                        <div className="body_card_text">
                            <div className="body_card_title">
                            <p>Air Jordan VI </p><br/>
                            </div>
                            <div className="body_card_description">
                            <br/><span>$999.99</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body_cards_column">
                    <div className="body_card">
                        <div className="body_card_image">
                            <img src="https://i.ibb.co/4TrPp6V/x5RaSM7.jpg" alt=""/>
                        </div>
                        <div className="body_card_text">
                            <div className="body_card_title">
                            <p>Air Jordan IV</p> <br/>
                            </div>
                            <div className="body_card_description">
                            <br/><span>$999.99</span>
                            </div>
            
                        </div>
                    </div>
                </div>
                <div className="body_cards_column">
                    <div className="body_card">
                        <div className="body_card_image">
                            <img src="https://i.ibb.co/1X7JpcL/Wshl7HG.jpg" alt=""/>
                        </div>
                        <div className="body_card_text">
                            <div className="body_card_title">
                            <p>Air Jordan I</p> <br/>
                            </div>
                            <div className="body_card_description">
                            <br/><span>$999.99</span>
                            </div>
            
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Body
