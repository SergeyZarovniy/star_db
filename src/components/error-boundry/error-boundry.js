import React,{Component} from 'react';
import './error-boundry.css';
import ErrorIndicator from '../error-indicator/error-indicator';


class ErrorBoundry extends Component {

    state = {
      hasError:false
    };
  
    componentDidCatch () {
      this.setState({hasError:true})
  }; 
  
  
    render () {
      if (this.state.hasError) {
        return <ErrorIndicator />
      }
      return this.props.children;
    }
  }

  export default ErrorBoundry;