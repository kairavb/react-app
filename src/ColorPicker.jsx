import { useState } from "react"

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")

    function handleColor(){
        setColor(event.target.value)
    }

    return(<div className="colorpicker">
        <h1>Color Picker</h1>
        <div className="colordisplay" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handleColor}/>
    </div>)
}

export default ColorPicker