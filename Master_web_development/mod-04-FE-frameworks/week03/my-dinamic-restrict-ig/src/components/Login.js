import axios from 'axios'
import React from 'react'

class Login extends React.Component {
    state = {
        error: ""
    }
    

    handleSubmit = (event) => {
        event.preventDefault()

        const body = JSON.stringify({
            username: event.target.email.value,
            password: event.target.pwd.value
        });
        console.log(body)
        axios.post('https://three-points.herokuapp.com/api/login', body, {
            withCredentials: true, headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response);
                this.setState({ error: "" })
                this.props.changeUser(response.data)
                this.props.changeSection('home')
                localStorage.setItem('userId', response.data.id)
            })
            .catch(err => {
                console.log(err.response)
                if (err.response.status === 401)
                    this.setState({ error: err.response.data.message })
                this.props.changeSection('login');
                if (err.response.status === 400) {
                    this.setState({ error: err.response.data.message })
                    this.props.changeSection('login');
                }
            })
    }
    render() {
        return (
            <><nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-md">
                    My IG
                </div>
            </nav><div className="form p-5">
                    {this.state.error !== "" ?
                        <div id="empty-list" className="alert alert-danger">
                            <i className="fas fa-exclamation-triangle">
                                {this.state.error}
                            </i>
                        </div>
                        : <div></div>}
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="text" className="form-control" id="email" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pwd"></input>
                        </div>
                        <button type="submit" className="btn-login btn-primary">Submit</button>
                    </form>
                </div></>
        )
    }
}

export default Login;