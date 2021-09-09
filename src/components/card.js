import React from 'react'
import { Link } from "react-router-dom"

const Card = ({card}) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    display: "flex",
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

    return <div className = "fighterCard">
        <Link to={`/card/${card.id}`}>
            <img src={card.img} alt="fighter-image"></img>
            <div style={div} className="nameLine"><h3>{card.firstName} "{card.nickname}" {card.lastName}</h3></div>
        </Link>
    </div>
}

export default Card