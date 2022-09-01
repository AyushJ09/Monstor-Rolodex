import React from "react";
import './card.style.css';

export const Card = (props) => {
    // console.log("Card render");
    return (
        <div className="card-container">
            <img alt={props.data.name} src={`https://robohash.org/${props.data.id}?set=set2&size=180x180`}/>
            <h2>{props.data.name}</h2>
            <p>{props.data.email}</p>
        </div>
    );
} 