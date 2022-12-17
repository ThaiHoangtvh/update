import React from "react";
// import { useCallback} from "react";

const Todo = ({todo,handleCheckBtnClick,className,handleDeleteClick})=> {
    const handleCheckBtnClick2 = () =>{
        handleCheckBtnClick({id:todo.id,isCompleted:className.toString()})
    }
    const handleDeleteClick2 = () => {
        handleDeleteClick(todo.id)
    }
    return(
        <div className="box-item-check" id = {className.toString()}>
            <div className="check-title">
            <input onClick={handleCheckBtnClick2} className="check-icon" type="checkbox"></input>
            <span className="item-task">{todo.name}</span>
            </div>
            <button className="bnt-del" type="button" onClick={handleDeleteClick2}>Xoá</button>
        </div>
    )
}
export default Todo