import React from 'react'
import { Link } from 'react-router-dom'

// destructuring the props needed to get our cards
const SingleCard = ({cards, match, edit, deleteCard, history}) => {
    const id = parseInt(match.params.id); // get the id from the url param
    const card = cards.find((card) => card.id === id);

    //////////////
    // Styles
    //////////////
    const div = {
        display: "flex",
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
      };

    return (
        <div className="fighterCard">
            <img src={card.img} alt="fighter-image"></img>
            <div className="nameLine">
                <h3>{card.firstName} "{card.nickname}" {card.lastName}</h3> </div>
                <button onClick={(event) => edit(card)}>Edit</button>
                <button onClick={(event) => deleteCard(card)}>Delete</button>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
      )

}

export default SingleCard