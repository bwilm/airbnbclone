import React from 'react'
import './Body.css';
import Card from './Card';
import {useHistory} from 'react-router-dom';

function Body() {
    const history = useHistory();
    return (
        <div className="body">
            <div className="body_text_container">
            <div className="body_mainText">
                <h1>Go Near</h1> 
                <p>Explore unique destinations near you.</p>
                <button onClick={()=>history.push('/search')}><small>Explore nearby</small></button>
            </div>
            </div>

            <div className="body_cards_container">
                <div className="body_cards_row">
                <Card
                src={'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480'}
                title='Unique Stays'
                description='Spaces that are more than just a place to sleep.'
                />
                <Card
                src={'https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480'}
                title='Online Experiences'
                description='Unique activities we can do together, led bya world of hosts.'
                />
                <Card
                src={'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480'}
                title='Entire Homes'
                description='Comfortable private places, with room for friends or family.'

                />
                </div>
                <div className="body_cards_row">
                <Card
                src={'https://a0.muscache.com/im/pictures/f93e0d75-0c69-4f3d-9c0b-26d4ccb323b3.jpg?aki_policy=large'}
                title='Pondok Prapen Cozy Boutique Villa close to Ubud Market'
                description='Entire villa hosted by Putu Pande'
                price="$50/night"
                />
                <Card
                src={'https://a0.muscache.com/im/pictures/9897595d-3b2a-41fa-ae04-34f14584c499.jpg?aki_policy=large'}
                title='Back to Nature with us at Bali De Pardis Cottage'
                description='Private room in guesthouse hosted by Komang'
                price='$35/night'
                />
                <Card
                src={'https://a0.muscache.com/im/pictures/73fad07d-18be-4324-a6f0-41dd0a0caa8e.jpg?aki_policy=large'}
                title='Entire wood house surrounded by nature.'
                description='Entire cottage hosted by Ayumar'
                price="$25/night"
                />
                </div>

            </div>
        </div>
    )
}

export default Body
