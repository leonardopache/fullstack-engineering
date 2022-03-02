import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className='Header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-md">
                    <Link className="btn btn-light" to="/react-week4/" >
                        My IG
                    </Link>

                    <Link className="btn btn-light" to="/react-week4/profile" >
                        <i className="fas fa-user"></i>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
export default Header;