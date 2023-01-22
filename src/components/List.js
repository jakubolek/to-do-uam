import React from "react";
import Item from "./Item";
import "./List.css"

const List = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
    return (
        <ul className="todo-list">
            {tasks.sort((a, b) => b.id - a.id).map(task => (
                <Item
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    enterEditMode={enterEditMode}
                />
            ))
            }
        </ul>
    )
}
export default List