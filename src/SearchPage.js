import React from 'react';
import './SearchPage.css';
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="search_page">
                <div className="search_page_info">
                    <p>62 stays · 14th of september · 14th of October · 2 guests </p>
                    <h1>Stays nearby</h1>
                    <Button
                    variant="outlined">Cancellation Flexability</Button>
                    <Button
                    variant="outlined">Price</Button>
                    <Button
                    variant="outlined">Rooms and beds</Button>
                    <Button
                    variant="outlined">More Filters</Button>
                    <Button
                    variant="outlined">Type of Place</Button>
                </div>

                <div className="search_page_container">
                <SearchResult
                img="https://a0.muscache.com/im/pictures/5e1cad30-9211-4868-84ba-ccb7da449d2d.jpg?aki_policy=large"
                description="2 guests ∙ 1 bedroom ∙ 1 bed ∙ 1 bath "
                title="Pondok Sartaya 2 Bungalow and Swimming Pool"
                location="Entire Villa in Buleleng"
                star={4.49}
                price="$15 / night"
                total="$414 total"
                />
                <SearchResult
                img="https://a0.muscache.com/im/pictures/8fc1d96a-9628-4da7-9515-a0a02a41c709.jpg?im_w=1200"
                description="2 guests ∙ 1 bedroom ∙ 1 bed ∙ 1 bath "
                title="Villa Asmara 2 Sumberkima Hill Retreat"
                location="Entire Villa in Pemuteran"
                star={4.90}
                price="$59 / night"
                total="$703 total"
                />
                <SearchResult
                img="https://a0.muscache.com/im/pictures/8e432ffe-4408-45f2-a0c4-8d154ef3626b.jpg?im_w=960"
                description="2 guests ∙ 1 bedroom ∙ 1 bed ∙ 1 bath "
                title="Stunning Villa Lily Lovina."
                location="Entire Villa in Kecamatan Buleleng"
                star={4.74}
                price="$69 / night"
                total="$930 total"
                />
                <SearchResult
                img="https://a0.muscache.com/im/pictures/d79eeed9-b30e-4e39-99ac-179c78c4ef49.jpg?im_w=960"
                description="2 guests ∙ 1 bedroom ∙ 1 bed ∙ 1 bath "
                title="Jeda Villa Modern Stylish Luxury Villa"
                location="Entire Villa in Gerokgak"
                star={4.77}
                price="$190 / night"
                total="$1239 total"
                />
                </div>


        </div>
    )
}

export default SearchPage
