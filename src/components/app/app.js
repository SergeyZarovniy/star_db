import React, {Component} from "react";
import "./app.css";
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';



export default class App extends Component {

  state = {
    showRandomPlanet : true,
    selectedPerson: 5
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });  
  };

  onPersonSelected = (id) => {
   this.setState({
     selectedPerson: id
   });
  }

render () {

  const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

  return(
    <div className='stardb-app col-md-12 col-sm-3 '>
        <Header/>

        {planet}

        <button 
            className="toggle-planet btn btn-warning btn-lg" 
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
        </button>
        <div className="row mb2">
        <div className="col-md-6 g-3">
          <ItemList onItemSelected = {this.onPersonSelected}/>
        </div>
        <div className="col-md-6 g-3 ">
          <PersonDetails personId = {this.state.selectedPerson}/>
        </div>
        
      </div>
    </div>
)
}
}

