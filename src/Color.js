import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const Color = ({ getColor }) => {
    const { color } = useParams();
    
    const { color: colorName, hex } = getColor(color);
    
    useEffect(() => {
        const body = document.getElementById("body");
        body.style.backgroundColor = hex || colorName;
        return () => {
            body.style.backgroundColor = 'white';
        }
    }, [hex, colorName]);

    return (
        <div>
            <h1>THIS IS { color.toUpperCase() } </h1>
            <h1>ISN'T IT BEAUTIFUL!</h1>
            <Link to="/colors"><h1>GO BACK</h1></Link>
        </div>
    );
};

export default Color;