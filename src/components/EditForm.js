import React, {useEffect, useState} from "react";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

    useEffect(()=> {
        const closeModalIfEscaped = (e) => {
            e.key === "Escape" && closeEditMode();
        }

        window.addEventListener('keydown', closeModalIfEscaped)

        return () => {
            window.removeEventListener('keydown', closeModalIfEscaped)
        }
    }, [closeEditMode])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName})
    }

    return (
        <div
            role="dialog"
            onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
        >
            <form
                className="todo"
                onSubmit={handleFormSubmit}
            >
                <div className="wrapper">
                    <input
                        type="text"
                        id="editTask"
                        className="input"
                        value={updatedTaskName}
                        onInput={(e) => setUpdatedTaskName(e.target.value)}
                        maxLength={60}
                        placeholder="Update Task"
                    />
                </div>
            </form>
        </div>
    )
}
export default EditForm