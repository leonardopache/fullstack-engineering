import React from "react";
import NavBar from "./NavBar";

class Header extends React.Component {

    render(){
        return (
            <div className="Header">
                <NavBar changeSelection={this.props.onChange} user={this.props.user}/>
            </div>
        )
    }
}

export default Header;