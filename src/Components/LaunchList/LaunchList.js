import React from 'react'

class LaunchList extends React.Component  {
    
    // gets called once info received from API
    displayLaunchInfo() {
        return "display launch info"
    }
    
    // renders "loading" if no launchData
    // data-testid allows us to test by retrieving specific ID
    render() {
        return (
            <div> 
                <h1 data-testid="header">LaunchList</h1>
                <div data-testid="launches">
                    {this.props.launchData && this.props.launchData.length <= 0 ? 'loading...' : this.displayLaunchInfo()}
                </div>
            </div>
        )
    }
}

export default LaunchList