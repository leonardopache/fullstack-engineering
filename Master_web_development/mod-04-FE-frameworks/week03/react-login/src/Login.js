import axios from 'axios'
import React from 'react'

class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            email: event.target.email.value,
            password: event.target.pwd.value
        }
        debugger
        axios.post('http://three-points.herokuapp.com/api/login', body, { withCredentials: true })
            .then(response => {
                console.log(response);
                this.props.changeApiKey('yCjxgHRmzuSP3_soPLLeVyJiDZkTLdM1');
                this.props.changeSection('home');
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401)
                    this.props.changeSection('login');
            })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>email</label>
                    <input type='text' name='email'></input>
                </div>

                <div>
                    <label>pwd</label>
                    <input type='password' name='pwd'></input>
                </div>

                <button type='submit'>login</button>
            </form>
        )
    }
}

export default Login;