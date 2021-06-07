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
  
  // mulitiplies page # by launches per page (10) to get index of last launch on page
  const indexOfLastLaunch = currentPage * launchesPerPage
  // subtracts last launch from # launches on page (10)
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage
  // slices total launches between first launch and last launch on page
  const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch)

  // instead of passing *all* launches, only passes in 10 at a time
  return (
    <div className="App">
      <LaunchList launchData={currentLaunches}/>
    </div>
  );
}

export default App;
