import axios from 'axios'
import React from 'react'

class Contacts extends React.Component {
    state = { contacts: [] }

    componentDidMount() {
        axios.get("http://three-points.herokuapp.com/api/posts", { withCredentials: true }).then(response => {
            console.log(response)
            this.setState({ contacts: response.data })
        })
            .catch(err => {
                console.log(err.response)
                if (err.response.status === 401)
                    this.props.changeSection('login')
            })
    }

    render() {
        if (this.state.contacts.length === 0)
            return <div>Loading... </div>

        return (
            <ul>{this.state.contacts.map(contacts => (
                <li>{contacts.text}</li>
            ))}</ul>
        )
    }
}

export default Contacts;