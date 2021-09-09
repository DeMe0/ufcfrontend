import AllCards from './pages/AllCards';
import SingleCard from './pages/SingleCard';
import Form from './pages/Form';
import './App.css';

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };
  ///////////////
  // State & Other Variables
  ///////////////

  // sound files
  const audio1 = new Audio("https://res.cloudinary.com/ademeo/video/upload/v1631216308/fighters/dana-done-sound_dvyceu.m4a");

  const audio2 = new Audio("https://res.cloudinary.com/ademeo/video/upload/v1631217877/fighters/dana-silva-sound_nnfdyo.m4a")

  const audio3 = new Audio("https://res.cloudinary.com/ademeo/video/upload/v1631219236/fighters/dana-disgusting-sound_nmjddq.m4a")

  const audio4 = new Audio("https://res.cloudinary.com/ademeo/video/upload/v1631219495/fighters/dana-gotta-make-money_stqrh4.m4a")

  const audio5 = new Audio("https://res.cloudinary.com/ademeo/video/upload/v1631219842/fighters/dana-big-mouth_at8gsa.m4a")

  const audio6 = new Audio("https://res.cloudinary.com/ademeo/video/upload/v1631220053/fighters/dana-nicest-guy_hqilze.m4a")
  

  // Our Api Url
  const url = "https://ufc-backend-628-ajd.herokuapp.com/fighters/";

  // State to Hold The List of Cards
  const [cards, setCards] = useState([]);

  // an object that represents a null card
  const nullCard = {
    firstName: "",
    lastName: "",
    nickname: "",
    currentDivision: "",
    record: "",
    img: "",
    age: ""
  }

  // const state to hold a card to edit
  const [targetCard, setTargetCard] = useState(nullCard)

  //////////////
  // Functions
  //////////////
  // function to get list of cards from api
  const getCards = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCards(data)
  }

  // function to add card from formData
  const addCards = async (newCard) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCard)
    })
    // get updated list of cards
    getCards()
  }

  // Function to select card to edit
  const getTargetCard = (card) => {
    setTargetCard(card);
    props.history.push("/edit");
  };

  // Function to edit card on form submission
  const updateCard = async (card) => {
  const response = await fetch(url + card.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  // get updated list of cards
  getCards();
  };

  // function to produce a random integer so that the audio choice that plays with deleteCard is randomized
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // function to play a random audio clip when the practice button is clicked
  const playAudio = () => {
    if(getRandomInt(6) === 0) {
      audio1.play()
    } else if(getRandomInt(6) === 1) {
      audio2.play()
    } else if(getRandomInt(6) === 2) {
      audio3.play()
    } else if(getRandomInt(6) === 3) {
      audio4.play()
    } else if(getRandomInt(6) === 4) {
      audio5.play()
    } else if(getRandomInt(6) === 5) {
      audio6.play()
  }
}

  // Function to edit card on form submission
  const deleteCard = async (card) => {
  const response = await fetch(url + card.id + "/", {
    method: "delete",
  });

  // get updated list of cards
  getCards();
  getRandomInt(3)
  if(getRandomInt(6) === 0) {
    audio1.play()
  } else if(getRandomInt(6) === 1) {
    audio2.play()
  } else if(getRandomInt(6) === 2) {
    audio3.play()
  } else if(getRandomInt(6) === 3) {
    audio4.play()
  } else if(getRandomInt(6) === 4) {
    audio5.play()
  } else if(getRandomInt(6) === 5) {
    audio6.play()
}
  
  props.history.push("/");
};

  //////////////
  // useEffects
  //////////////
  //useEffect to get list of cards when page loads
  useEffect(() => {getCards()}, [])

  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div className="App">
      <h1>Dana White Simulator</h1>
      <Link to="/new"><button style={button}>Sign A New Fighter</button></Link>
      <button style={button} onClick={(event) => playAudio()}>Practice Firing Your Fighters</button>
      <hr></hr>
      <h2>Current Roster</h2>
      <Switch>
        <Route 
          exact path ="/"
          render={(routerProps)=>(
            <AllCards {...routerProps} cards={cards} />
          )}
          />
        <Route
          path="/new"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialCard={nullCard}
              handleSubmit={addCards}
              buttonLabel="create card" />
          )}
          />
          <Route
            path="/card/:id"
            render={(routerProps) => (
              <SingleCard
                {...routerProps}
                cards={cards}
                edit={getTargetCard}
                deleteCard={deleteCard}
                />
          )}
          />
          <Route
            path="/edit"
            render={(routerProps) => (
              <Form
                {...routerProps}
                initialCard={targetCard}
                handleSubmit={updateCard}
                buttonLabel="update card"
                />
          )}
          />
      </Switch>
    </div>
  );
}

export default App;
