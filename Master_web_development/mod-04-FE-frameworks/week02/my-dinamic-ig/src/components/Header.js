import NavBar from "./NavBar";

function Header({onChange}) {
    return (
        <div className="Header">
            <NavBar changeSelection={onChange}/>
        </div>
    )
}

export default Header;