import { Link } from "react-router-dom";
import './HomeHeader.css';

const HomeHeader = () => {
    return (
        <header className="HomeHeader">
            <h3>Welcome to the color factory</h3>
            <Link className="HomeHeader-a" to="/colors/add">Add a color</Link>
        </header>
    );
};

export default HomeHeader;