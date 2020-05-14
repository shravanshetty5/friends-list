import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
    <img src={`https://robohash.org/${props.friend.id}?set=set1&size=180x180`} alt=""/>
        <h2>{props.friend.name}</h2>
        <p>{props.friend.email}</p>
    </div>
);