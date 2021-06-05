import React from 'react'

class LaunchList extends React.Component  {
    
    // gets called once info received from API
    displayLaunchInfo() {
        const launchData = this.props.launchData
        console.log("launchData, launchData.length", launchData, launchData.length)
        // return launchData.length > 0 ? console.log(launchData.length) : 'loading...' 
        // this.listLaunchInfo(launchData)
    }

    listLaunchInfo(launchData) {
        launchData.map((launch, index) => {
            return (
                <tr key={index}>
                    <td>{launch.flight_number}</td>
                </tr>
            )
        })
        
        // return this.props.launchData
    }
    
    // renders "loading" if no launchData
    // data-testid allows us to test by retrieving specific ID
    render() {
        return (
            <div> 
                <h1 data-testid="header">SpaceX Launches</h1>
                <div data-testid="launches">
                    <table >
                        <thead data-testid="launch-table">
                            <tr>
                                <th data-testid="table-header">Flight Number</th>
                                <th data-testid="table-header">Launch Year</th>
                                <th data-testid="table-header">Rocket Name</th>
                                <th data-testid="table-header">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayLaunchInfo()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default LaunchList