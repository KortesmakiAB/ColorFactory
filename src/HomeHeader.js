import { Link } from "react-router-dom"

const HomeHeader = () => {
    return (
        <header>
            <h3>Welcome to the color factory.</h3>
            <Link to="/colors/add">Add a color</Link>
        </header>
    );
};

export default HomeHeader;