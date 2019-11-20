import React, { Component } from "react";

class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            fighters: [
                {
                name: 'Jim',
                division: '170',
                age: 35
                },
                {
                    name: 'Joe',
                    sponsor: 'Nike',
                    age: 30
                }
            ],
            userInput: '',
            filteredFighters: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val});
    }

    filterFighters(prop){
        let fighters = this.state.fighters;
        let filteredFighters = [];

        for( let i = 0; i < fighters.length; i++){
            if (fighters[i].hasOwnProperty(prop)){
                filteredFighters.push(fighters[i]);
            }
        }
        this.setState({filteredFighters: filteredFighters});
    }
    
 
 
    render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.fighters, null, 10 )}</span>
          <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick = {() => this.filterFighters(this.state.userInput)}> Filter</button>
              <span className="resultsBox FilterObjectRB">Filtered: {JSON.stringify(this.state.filteredFighters, null, 10)} </span>
            
         
        
      </div>
    );
  }

}
export default FilterObject;
