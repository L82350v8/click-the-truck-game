import React from "react";
import "./Navbar.css";
import semi9 from "../../images/TruckImgs/semi-truck-9.png";

const styles = {
  semi9Logo: {
    height: 90
  }
};

const Navbar = (props) => (
  <div className="container-fluid p-0">
    <div className="navbar-fluid">
      <header className="container-fluid" >   
        <img src={semi9} className="semi9Logo" alt="semi-truck-9" style={styles.semi9Logo} />
        <h1 className="App-title">Click the Truck Game</h1>
        <h3>Click on an image to earn points, <i>but don't click on that image more than once !</i></h3>
      </header> 
    </div>
  </div>
);

export default Navbar;
