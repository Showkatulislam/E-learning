import React from 'react';
import { Rating } from 'react-simple-star-rating'
import './service.css'
const Service = (props) => {

    const { name, teacher, rating, price, img } = props.course

    return (
        <div>
            <div className="course">
                <img src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <p>{teacher}</p>
                    <p><Rating
                        ratingValue={rating}
                    ></Rating></p>
                    <p>Price :{price} $</p>
                    <button>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Service;