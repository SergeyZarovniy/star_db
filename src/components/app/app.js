import React from "react";
import "./app.css";
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import Spinner from "../spinner/spinner";





const App = () => {
return(
    <div>
        <Header/>
        <RandomPlanet/>
        <div className="row mb2">
        <div className="col-md-5 g-3">
          <ItemList />
        </div>
        <div className="col-md-5 g-3">
          <PersonDetails />
        </div>
        
      </div>
    </div>
)
}

export default App;