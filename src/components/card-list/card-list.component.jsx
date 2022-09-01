import React from "react";
import './card-list.component.css';
import { Card } from "../card/card.component";
const CardList = props => {
    // console.log("CardList render");
    return (
        <div className="card-list" >
            { 
                props.monsters.map(usr => (
                    <Card key={usr.id} data={usr}/>
                ))
            }
        </div>
        
    );
}

export default CardList;