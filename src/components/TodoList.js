import React from "react";
import { memo } from "react";
import Todo from "./Todo";

const TodoList = ({todoList, handleCheckBtnClick, handleDeleteClick}) =>{
    if (todoList.length > 0) {
        return(
            <div>
                {
                    todoList.map(todo => 
                    <Todo 
                    handleDeleteClick = {handleDeleteClick}
                    handleCheckBtnClick = {handleCheckBtnClick}
                    key = {todo.id}
                    todo = {todo}
                    className = {todo.isCompleted}
                    />)
                    
                }
            </div>
        )
    }
    
}
export default memo(TodoList)