import axios from 'axios'

// create instance of axios client w/ couple default props
export const spacexLaunches = () => {
    return axios.get('https://api.spacexdata.com/v4')
}