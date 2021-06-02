import { Link, Redirect, useParams } from "react-router-dom";
import './Color.css';

const Color = ({ getColor }) => {
    const { color } = useParams();
    
    const colorObj = getColor(color);
    
    if (!colorObj) return <Redirect to='/colors'></Redirect>

    const { color: colorName, hex } = colorObj
    
    return (
        <div className="Color" style={{ backgroundColor: hex || colorName}}>
            <h1>THIS IS { color.toUpperCase() } </h1>
            <h1>ISN'T IT BEAUTIFUL!</h1>
            <Link className="Color-a" to="/colors"><h1>GO BACK</h1></Link>
        </div>
    );
};

export default Color;