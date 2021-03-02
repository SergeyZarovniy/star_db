import React,{Component} from 'react';
import './people-page.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';


export default class PeoplePage extends Component {

    state = {
        selectedPerson: 1,
        hasError:false
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
      };

    componentDidCatch () {
        this.setState({hasError:true})
    }  

    render () {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className = "people-page">
            <div className="row mb2">
            <div className="col-md-6 g-3">
              <ItemList onItemSelected = {this.onPersonSelected}
              getData={this.swapiService.getAllPeople}/>
            </div>
            <div className="col-md-6 g-3 ">
              <PersonDetails personId = {this.state.selectedPerson}/> 
            </div>
          </div>
          
          </div>
        )
    }
}
