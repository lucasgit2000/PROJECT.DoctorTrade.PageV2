import React from 'react';

import './reviews.css'

function Reviews() {
    return (
        <div className="reviews" id="reviews">
            <div className="reviews-header">
                <h1>Reviews</h1>
            </div>
            <div className="reviews-body">
                <img src={require('../../assets/img/030f3a6c46e0ad1de1268b929414f768.png')}></img>
                <img src={require('../../assets/img/030f3a6c46e0ad1de1268b929414f768.png')}></img>
                <img src={require('../../assets/img/030f3a6c46e0ad1de1268b929414f768.png')}></img>
                <img src={require('../../assets/img/030f3a6c46e0ad1de1268b929414f768.png')}></img>
            </div>
        </div>
    );
}

export default Reviews;