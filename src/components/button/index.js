import React from "react";
const Button = ({ClassName,id,onclick}) =>{
    return(
        <button type="submit" className={ClassName} id={id} onClick = {onclick}>Add</button>
    )
}
export default Button