import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/'>
                        <span className="navbar-brand mb-0 h1">Contact App</span>
                    </Link>
                    <Link to='/addContact'>New Contact</Link>
                    <Link to='/viewContact'>View Contact</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;