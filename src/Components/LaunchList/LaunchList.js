import React from 'react'
import { Link } from 'react-router-dom'

class LaunchList extends React.Component  {

    // maps over API data for each column: Flight Number, Launch Year, Rocket Name, and Details
    listLaunchInfo(launchData) {
        return launchData.map((launch, index) => {
            return (
                <tr key={index} onClick={this.handleClick.bind(launch)}>
                    <td>{launch.flight_number}</td>
                    <td>{launch.date_local}</td>
                    <td>{launch.name}</td>
                    <td>{launch.details}</td>
                </tr>
            )
        })
    }

    // links to presskit
    handleClick(e) {
        // debugger
        console.log("row clicked. e:",e)
        console.log("this", this.links.presskit)
    }

    render() {
        return (
            <div> 
                <h1 data-testid="header">SpaceX Launches</h1>
                <div data-testid="launches">
                    <table id="launch-table">
                        <thead data-testid="launch-table">
                            <tr>
                                <th data-testid="table-header">Flight Number</th>
                                <th data-testid="table-header">Launch Year</th>
                                <th data-testid="table-header">Rocket Name</th>
                                <th data-testid="table-header">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.launchData.length > 0 ? this.listLaunchInfo(this.props.launchData) : <tr><td colSpan="4">Loading...</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default LaunchList