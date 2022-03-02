import React from "react";

class Profile extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        localStorage.removeItem('userId')
        this.props.resetUser()
        this.props.changeSection('home')
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.user.avatar} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.username}</h5>
                    <p className="card-text">{this.props.user.bio}</p>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn-logout btn-danger small">Logout</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile;