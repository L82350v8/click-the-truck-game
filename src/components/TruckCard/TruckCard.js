import React from "react";
import "./TruckCard.css";


const TruckCard = props => (
  <div className="card">  
    <div className="card-img">                 
      <img alt={props.name} src={props.image} onClick={() => props.setClickedTrue(props.id)} />
    </div>
  </div>
);

export default TruckCard;
