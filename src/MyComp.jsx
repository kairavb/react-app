import { useState, useEffect } from "react";

function MyComp(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")

        return ()=>{
            window.removeEventListener("resize", handleResize)
            console.log("EVENT LISTENER REMOVED")
        }
    }, [])

    useEffect(()=>{
        document.title = `Size: ${width} X ${height}`
    }, [width, height])
    
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
    <p>Height: {height}px</p>
    <p>WIdth: {width}px</p>
    </>)
}

export default MyComp