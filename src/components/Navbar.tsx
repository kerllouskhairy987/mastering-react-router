import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="m-5">
            <ul className="flex justify-center items-center space-x-16">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/learn">Learn</NavLink></li>
                <li><NavLink to="/contribute">Contribute</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar