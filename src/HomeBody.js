import { Link } from "react-router-dom";
import './HomeBody.css';

const HomeBody = ({ colors }) => {
    
    return (
        <main className="HomeBody">
            <h4>Please select a color.</h4>
            <ul className="HomeBody-ul">
                { colors.map(c => <Link key={c.hex} to={`colors/${c.color}`}> <li>{c.color}</li></Link>) }
            </ul>
        </main>
    );
};

export default HomeBody;