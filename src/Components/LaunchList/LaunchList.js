import React from 'react'
import Table from 'react-bootstrap/Table'

class LaunchList extends React.Component  {

    // maps over API data for each column: Flight Number, Launch Year, Rocket Name, and Details
    listLaunchInfo(launchData) {
        return launchData.map((launch, index) => {
            return (
                <tr key={index} onClick={this.handleClick.bind(launch)} data-testid="launch-row">
                    <td test-dataid="flight-number">{launch.flight_number}</td>
                    <td test-dataid="flight-year">{launch.date_local.slice(0,4)}</td>
                    <td test-dataid="launch-name">{launch.name}</td>
                    <td test-dataid="launch-details">{launch.details}</td>
                </tr>
            )
        })
    }

    // links to presskit
    handleClick() {
        return this.links.presskit ? window.location.href=`${this.links.presskit}` : window.alert("No Presskit available for this launch.")
    }

    render() {
        return (
            <div> 
                <h1 data-testid="header">SpaceX Launches</h1>
                <h6>To see the presskit for a specific launch, click on the appropriate row.</h6>
                <div data-testid="launches">
                    <Table striped bordered hover variant="dark" id="launch-table" >
                        <thead data-testid="launch-table">
                            <tr data-testid="table-row">
                                <th data-testid="table-header">Flight Number</th>
                                <th data-testid="table-header">Launch Year</th>
                                <th data-testid="table-header">Rocket Name</th>
                                <th data-testid="table-header">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.launchData && this.props.launchData.length > 0 ? this.listLaunchInfo(this.props.launchData) : <tr><td colSpan="4">Loading...</td></tr>}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default LaunchList

