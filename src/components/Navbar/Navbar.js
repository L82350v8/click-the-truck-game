import React from "react";
import "./Navbar.css";
import semi9 from "../../images/TruckImgs/semi-truck-9.png";

const styles = {
  header: {
    backgroundColor: "#222",
    height: 180,
    padding: 20,
    color: "white" 
  },
  semi9Logo: {
    height: 80
  }
};

const Navbar = (props) => (
  <div className="container-fluid">
    <div className="navbar-fluid">
      <header>   
        <img src={semi9} className="semi9Logo" alt="semi-truck-9" style={styles.semi9Logo} />
        <h1 className="App-title">Play Click-The-Truck Game !</h1>
        <h2>Click on an image to earn points, but don't click on that image more than once !</h2>
      </header> 
    </div>
  </div>
 
);

export default Navbar;
