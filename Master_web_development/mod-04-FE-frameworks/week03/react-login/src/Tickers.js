import axios from 'axios'
import React from 'react'

class Tickers extends React.Component {
    state = { tickers: [] }

    componentDidMount() {
        const url = "https://api.polygon.io/v3/reference/tickers?apiKey=".concat(this.props.api);
        axios.get(url, {withCredentials: true})
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
            if (err.response.status === 401)
                this.props.changeSection('login')
        })
    }

    render() {
        if (this.state.tickers.length === 0)
            return <div>Loading... </div>

        return (
            <ul></ul>
        )
    }
}

export default Tickers;