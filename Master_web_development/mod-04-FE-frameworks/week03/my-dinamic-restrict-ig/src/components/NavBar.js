import React from "react";

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-md">
                    <button className="btn btn-light" onClick={() => { this.props.changeSelection('home') }} >
                        My IG
                    </button>

                    <button className="btn btn-light" onClick={() => { this.props.changeSelection('profile') }} >
                        <i className="fas fa-user"></i>
                    </button>
                </div>
            </nav>
        )
    }
}

export default NavBar;