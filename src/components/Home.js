import { NavLink } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <NavLink to='/' className="nav-link">Log out</NavLink>
        </div>
    )
}