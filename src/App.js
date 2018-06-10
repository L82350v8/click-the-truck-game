import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import TruckCard from "./components/TruckCard";
import trucks from "./components/trucks.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Setting the initial state of this.state.trucks to the trucks json array
    this.state = {
      count: 0,
      playerMsg: "Click on an image to begin!",
      topCount: 0,
      trucks
    };
  }
 
  setClickedTrue = id => {
    console.log("setClickedTrue id is " + id);
    console.log("count is " + this.state.count);
    let imgBeenClicked = false;
    console.log("imgBeenClicked is" + imgBeenClicked);
    //    const stateImg = this.state.trucks.map(function (truckInState) {
    //      return truckInState;
    //    });
    //    console.log(JSON.stringify(stateImg, null, 2) + "\n");

    // find the clicked truck json within state.
    const activeTruckInState = this.state.trucks.find(truckInState => truckInState.id === id) 

    if (activeTruckInState) {
      if (activeTruckInState.clicked === true) {
        console.log("image has already been clicked!! Setting to false.");
        // more stuff will be done here like reshuffle the images.
        this.setState({ count: 0 }, () => {
          console.log(this.state.count, "count is");
        });
        this.setState({ playerMsg: "Truck was clicked before!" }, () => {
          console.log(this.state.playerMsg, "playerMsg is");
        });
      }
      else {
        console.log("setting clicked to true for 1st time.");
        activeTruckInState.clicked = true
        this.setState({ count: this.state.count + 1}, () => {
          console.log(this.state.count, "count is");
          if(this.state.count > this.state.topCount) {
            this.setState({ topCount: this.state.topCount + 1 }, () => {
              console.log(this.state.topCount, "topCount is");
            });
          }
        }); 
        this.setState({ playerMsg: "New click on that truck!" }, () => {
          console.log(this.state.playerMsg, "playerMsg is");
       });
      }
    }
    
    console.log("activeTruckInState.id: ", activeTruckInState.id);
    console.log("imgBeenClicked is" + imgBeenClicked);

    this.setState(activeTruckInState);

//    const stateImg = this.state.trucks.map(function (truckInState) {
//      return truckInState;
//    });
//    console.log(JSON.stringify(stateImg, null, 2) + "\n");
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
