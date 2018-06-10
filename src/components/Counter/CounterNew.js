import React from 'react';
import "./Counter.css";

const Counter = props => {

    return (
      <div className="header">
        <div className="row">
          <div className="col-sm-4 text-center">
            <h2>Your Score: {props.count}</h2>
          </div>
          <div className="col-sm-4 text-center">
            <h2>Click a truck to begin a game !</h2>
          </div>
          <div className="col-sm-4 text-center">
            <h2>Top Score: {props.topCount}</h2>
          </div>
        </div>
      </div>
    );
}

export default Counter;
