import { Link } from "react-router-dom";
import './Home.scss'

export function Home(): JSX.Element {
    return <>
        <h1 data-testid="home-1">Privacy Dashboard</h1>
        <div className="home-links">
            <Link to="/leaks"><img className="home-image" src="Leak.png" /></Link>
            <Link to="/deletion"><img className="home-image" src="Delete.png" /></Link>
            <Link to="/access"><img className="home-image" src="Access.png" /></Link>
            <Link to="/settings"><img className="home-image" src="Settings.png" /></Link>
        </div>
    </>
}