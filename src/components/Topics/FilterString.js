import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          <input className="inputLine">
            <button className="confirmationButton">
              <span className="resultsBox filterStringRB"></span>
            </button>
          </input>
        </span>
      </div>
    );
  }
}

export default FilterString;
