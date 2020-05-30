import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from "./Spinner";
class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { lat: null, error: "" };
//   }

 // or 
  state = { lat: null, error: "" }; // Babel defines the constructor for us. Kind of a short hand
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ error: error.message });
      }
    );
  }

  getRenderContent(){
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    }
    if (!this.state.error && this.state.lat) {
      return <SeasonDisplay lat = {this.state.lat}/>
    }
    return <Spinner message = 'Please accept location request'/>
  }
  render() {
    return (
      <div>
        {this.getRenderContent()}
      </div>
    )
  }

  //   componentDidUpdate(){
  //       console.log('Component got re-rendered');

  //   }
}
ReactDOM.render(<App/>, document.querySelector("#root"));
