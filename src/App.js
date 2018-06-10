import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import TruckCard from "./components/TruckCard";
import trucks from "./components/trucks.json";

class App extends React.Component {
    // Setting the initial state of trucks to the json array values.
    state = {
      count: 0,
      playerMsg: "Click on an image to begin!",
      topCount: 0,
      trucks
    };
  
  // uses a Fisher-Yates shuffle algorithm to shuffle the truck images after an image is clicked. 
  shuffle = array => {
    let i = 0;
    let j = 0;
    let temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  };

  // setClickedTrue performs most of the tasks needed to execute the game. 
  setClickedTrue = id => {

    // find the clicked truck json within state.
    const activeTruckInState = this.state.trucks.find(truckInState => truckInState.id === id) 
    
    if (activeTruckInState) {
      // if truck has been clicked before.
      if (activeTruckInState.clicked === true) {
        // reset the player score to 0.
        this.setState({ count: 0 }, () => {
        });
        // send player message. 
        this.setState({ playerMsg: "That truck was clicked before!" }, () => {
        });
      }
      // new click for a truck.    
      else {
        // set clicked to true within the clicked truck object.
        activeTruckInState.clicked = true
        // increment player score by 1.
        this.setState({ count: this.state.count + 1}, () => {
          // if player score is greater than top score, increment top score by 1.
          if(this.state.count > this.state.topCount) {
            this.setState({ topCount: this.state.topCount + 1 }, () => {
            });
          }
        }); 
        // send player message.
        this.setState({ playerMsg: "New click on that truck!" }, () => {
       });
      }
      // shuffle the truck images after a player image click.
      const shuffledTrucks = this.shuffle(this.state.trucks);
      // set the state of trucks to the shuffledTrucks.
      this.setState({ trucks: shuffledTrucks }, () => {
      });
    }
    // set the state of the truck object that was clicked. 
    this.setState(activeTruckInState);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Counter count={this.state.count} playerMsg={this.state.playerMsg} topCount={this.state.topCount} />
        <Wrapper>
          {this.state.trucks.map(truck => (
            <TruckCard
              id={truck.id}
              key={truck.id}
              name={truck.name}
              image={truck.image}
              setClickedTrue={this.setClickedTrue.bind(this)}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
