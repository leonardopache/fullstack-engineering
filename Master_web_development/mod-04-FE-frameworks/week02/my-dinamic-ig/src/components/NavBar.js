function NavBar({ changeSelection }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
                <button className="btn btn-light" onClick={ () => { changeSelection(true) } } >
                    My IG
                </button>
                
                <button className="btn btn-light" onClick={ () => { changeSelection(false) } } >
                    <i className="fas fa-user"></i>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;