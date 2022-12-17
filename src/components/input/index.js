import React from "react";
const Textfield = ({ClassName,id,placeholder,value,onchange}) =>{
    return (
        <input
            className={ClassName} 
            id={id} 
            placeholder={placeholder}
            value = {value}
            onChange = {onchange}>
        </input>
    )
}
export default Textfield