import React, {Component} from "react";
import "./app.css";
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../item-details/item-details';
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import ErrorButton from "../error-button/error-button";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ItemDetails from "../item-details/item-details";



export default class App extends Component {

  swapiService = new SwapiService ();

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

  const {getPerson,
         getStarship,
         getPersonImage,
         getStarshipImage} = this.swapiService;

  const personDetails = (
    <ItemDetails itemId={5}
    getData = {getPerson}
    getImageUrl={getPersonImage}
    />
  );
  const starshipDetails = (
    <ItemDetails itemId={5}
    getData = {getStarship}
    getImageUrl = {getStarshipImage}
    />
  );

  return(
    <div className='stardb-app col-md-12  col-sm-3 '>
        <Header/>

        <Row left={personDetails} 
             right={starshipDetails}/>

        {/* {planet}
        <div className="row mb2 button-row">
        <button 
            className="toggle-planet btn btn-warning btn-lg " 
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
        </button>
        <ErrorButton/>
    </div>
       <PeoplePage/> */}

    </div>
    
);
}
}