import React, { useState, useEffect } from 'react'
import LaunchList from './Components/LaunchList/LaunchList'
import axios from 'axios'

import './App.css';
const App = () => {
  // establishes state for launches, default empty array
  const [launches, setLaunches] = useState([])
  // establishes state for pagination, default page is 1
  const [currentPage, setCurrentPage] = useState(1)
  // sets # of launches per page, 10
  const [launchesPerPage, setLaunchesPerPage] = useState(10)

  // fetches launch data from spaceX API, assigns response to launchInfo var
  // useEffect mimics componentDidMount()
  useEffect(() => {
    const apiUrl = 'https://api.spacexdata.com/v4/launches'
    const fetchLaunches = async() => {
      const resp = await axios.get(apiUrl)
      setLaunches(resp.data)
    }
    fetchLaunches() 
   }, [])
  
  // get launches on current page
  const indexOfLastLaunch = currentPage * launchesPerPage
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage
  const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch)

  return (
    <div className="App">
      <LaunchList launchData={launches}/>
    </div>
  );
}

export default App;
