import React,{Component} from 'react';
import './people-page.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';


export default class PeoplePage extends Component {

    state = {
        selectedPerson: 1 
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
      };

    render () {
        return (
            <div className="row mb2">
            <div className="col-md-6 g-3">
              <ItemList onItemSelected = {this.onPersonSelected}/>
            </div>
            <div className="col-md-6 g-3 ">
              <PersonDetails personId = {this.state.selectedPerson}/>
            </div>
            
          </div>
        )
    }
}
