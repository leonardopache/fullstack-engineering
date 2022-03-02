import React, { useEffect, useState } from "react";
import { getProfile, logout } from "../api/APIService";
import Spinner from "../components/Spinner";


function handleSubmit(event) {
    event.preventDefault()
    localStorage.removeItem('userId')
    logout()
    window.location.replace('/react-week4/login')
}

function Profile() {
    const [user, setUser] = useState('')

    useEffect(() => {
        const profileId = localStorage.getItem('userId')
        if (profileId) {
            getProfile(profileId)
                .then(user => {
                    setUser(user)
                })
        } else {
            window.location.replace('/react-week4/login')
        }
    }, [])

    return (
        <div className='text-center'>
            {user ?
                <div className="card">
                    <img className="card-img-top" src={user.avatar} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.username}</h5>
                        <p className="card-text">{user.bio}</p>
                        <form onSubmit={handleSubmit}>
                            <button type="submit" className="btn-logout btn-danger small">Logout</button>
                        </form>
                    </div>
                </div>
                : <Spinner />}
        </div>
    )
}

export default Profile;