import React,{Component} from 'react';
import './people-page.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

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

        const itemList = (
          <ItemList onItemSelected = {this.onPersonSelected}
          getData={this.swapiService.getAllPeople}
          renderItem = {({name,gender,birthYear}) => `${name} (${gender},${birthYear})`}/>
        );

        const personDetails = (
         <PersonDetails personId = {this.state.selectedPerson}/> 
        );

        return (
            <div className = "people-page">
            <div className="row mb2">
            <div className="col-md-6 g-3">
             {itemList}
            </div>
            <div className="col-md-6 g-3 ">
              {personDetails}
            </div>
          </div>
          
          </div>
        )
    }
}