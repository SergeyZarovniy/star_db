import React, {Component} from "react";
import "./app.css";
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import ErrorButton from "../error-button/error-button";
import SwapiService from "../../services/swapi-service";



export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet : true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });  
  };

  
render () {

  
  const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

  return(
    <div className='stardb-app col-md-12  col-sm-3 '>
        <Header/>

        {planet}
        <div className="row mb2 button-row">
        <button 
            className="toggle-planet btn btn-warning btn-lg " 
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
        </button>
        <ErrorButton/>
    </div>
       <PeoplePage/>

       <div className = "people-page">
            <div className="row mb2">
            <div className="col-md-6 g-3">
              <ItemList 
              onItemSelected = {this.onPersonSelected}
              getData={this.swapiService.getAllPlanets} 
              renderItem = {(item)=>item.name}/>
            </div>
            <div className="col-md-6 g-3 ">
              <PersonDetails personId = {this.state.selectedPerson}/> 
            </div>
          </div>
          
          </div> 

          <div className = "people-page">
            <div className="row mb2">
            <div className="col-md-6 g-3">
              <ItemList 
              onItemSelected = {this.onPersonSelected}
              getData={this.swapiService.getAllStarships} 
              renderItem={(item) => item.name}/>
            </div>
            <div className="col-md-6 g-3 ">
              <PersonDetails personId = {this.state.selectedPerson}/> 
            </div>
          </div>
          
          </div> 

    </div>
    
);
}
}