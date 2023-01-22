import React, {useState} from "react";

import "./Item.css"
import {AiOutlineEdit} from "react-icons/ai";
import {MdDeleteOutline} from "react-icons/md";

const Item = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        toggleTask(task.id);
    }

    return (
        <li className="todo-items-list">
            <div className="todo-task-group">
                <input
                    type="checkbox"
                    className="input-checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    name={task.name}
                    id={task.id}
                />
                <label
                    htmlFor={task.id}
                    className="item-label"
                >
                    {task.name}

                </label>
            </div>
            <div className="item-buttons">
                <AiOutlineEdit
                    className="edit-button"
                    onClick={() => enterEditMode(task)}
                />

                <MdDeleteOutline
                    className="delete-button"
                    onClick={() => deleteTask(task.id)}
                />

            </div>
        </li>
    )
}
export default Item