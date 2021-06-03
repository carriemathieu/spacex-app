import React from 'react'

class LaunchList extends React.Component  {
    
    // gets called once info received from API
    displayLaunchInfo() {
        return "display launch info"
    }
    
    // renders "loading" if no launchData
    render() {
        return (
            <div> 
                <h1> LaunchList</h1>
                {this.props.launchData.length <= 0 ? 'loading...' : this.displayLaunchInfo()}
            </div>
        )
    }
}

export default LaunchList