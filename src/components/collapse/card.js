import React from 'react';
import './card.css'


export const Card = (props) => (
    <div className="card-container">
        <img style={{width:300, height:280}} alt="monster" src={props.monster.img}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.work}</p>
    </div>
       
    
);