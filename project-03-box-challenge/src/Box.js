import React, { useState } from 'react'

export const Box = (props) => {

    // const [on, setOn] = useState(props.on)

    const styles = {
        backgroundColor : props.on ? "#222222" : "#cccccc"
    }

    // function toggle() {
    //     setOn(prevon => !prevon)
    // }

    return (
        <div 
            style={styles} 
            className="box"
            onClick={ ()=> props.clickHandler(props.id)}
        >
        </div>
    )
}
