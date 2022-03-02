import React, { useState } from 'react'
import { login } from '../api/APIService';
import { useHistory } from 'react-router-dom'


function Login(props) {
    const { replace } = useHistory()
    const [error, setError] = useState(null)

    function handleSubmit(event) {
        event.preventDefault()

        const body = JSON.stringify({
            username: event.target.email.value,
            password: event.target.pwd.value
        });
        console.log(body)
        login(body)
            .then((r) => {
                localStorage.setItem('userId', r.id)
                replace('/react-week4/')
            })
            .catch((error) => {
                setError(error.response.data.message)
            })
    }


    return (
        <div className="container p-5">
            {error ?
                <div id="empty-list" className="alert alert-danger">
                    <i className="fas fa-exclamation-triangle">
                        <span className='p-2'>{error}</span>
                    </i>
                </div>
                :
                <div></div>
            }
            <div className='form-control'>
                <form onSubmit={handleSubmit}>
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
            </div>
        </div>
    )
}

export default Login;