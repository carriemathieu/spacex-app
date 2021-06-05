import React from 'react'
import LaunchList from './Components/LaunchList/LaunchList'

import './App.css';
class App extends React.Component {
  // assigns apiData to launchInfo variable
  // would like to refactor in future using hooks instead
  state = {
    launchInfo: []
  }

  // fetches launch data from spaceX API, assigns response to launchInfo var
  componentDidMount() {
    const apiUrl = 'https://api.spacexdata.com/v4/launches'
    fetch(apiUrl)
        .then(resp => resp.json())
        .then(apiData => this.setState({
          launchInfo: apiData
        }))
    // console.log(this.state)
  }
  
  render() {
    return (
      <div className="App">
        <LaunchList launchData={this.state.launchInfo}/>
      </div>
    );
  }
}

export default App;
