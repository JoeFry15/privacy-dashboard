import { Link } from "react-router-dom";
import './Home.scss'

export function Home(): JSX.Element {
    return (
    <div className="Home">
        <h1>Your Privacy Dashboard</h1>
        <Link to="/leaks"><img src="Leak.png" /></Link>
        <Link to="/deletion"><img src="Delete.png" /></Link>
        <Link to="/access"><img src="Access.png" /></Link>
    </div>
    )
}