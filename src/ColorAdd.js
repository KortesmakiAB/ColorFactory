import { useState } from "react";
import { useHistory } from "react-router";

const ColorAdd = ({ addColor }) => {
    
    const [colorName, setColorName] = useState('');
    const [colorValue, setColorValue] = useState('');
    const history = useHistory();

    const handleNameChange = evt => setColorName(evt.target.value);
    const handleColorChange = evt => setColorValue(evt.target.value);
    
    const handleSubmit = evt => {
        evt.preventDefault();

        addColor({
            color: colorName,
            hex: colorValue
        });

        setColorName('');
        setColorValue('');

        history.push('/colors');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label to="color-name">Color Name</label>
                <input id="color-name" type="text" value={colorName} onChange={handleNameChange}></input>
            </div>
            <div>
                <label to="color-value">Color Value</label>
                <input id="color-value" type="color" value={colorValue} onChange={handleColorChange}></input>
            </div>

            <button>Add this color</button>
        </form>
    );
};

export default ColorAdd;