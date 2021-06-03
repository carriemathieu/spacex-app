import React from 'react'
import LaunchList from './Components/LaunchList'

import './App.css';
class App extends React.Component {
  // assigns apiData to launchInfo variable
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
        <LaunchList launchData={this.state}/>
      </div>
    );
  }
}

export default App;
