
function Profile({avatar, username, bio}) {
    return (
        <div className="card">
            <img className="card-img-top" src={avatar} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{bio}</p>
            </div>
        </div>
    )
}

export default Profile;