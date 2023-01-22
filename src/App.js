import './App.css';
import {useState} from "react";
import useLocalStorage from "./hook/LocalStorage";
import EditForm from "./components/EditForm";
import CustomForm from "./components/CustomForm";
import List from "./components/List";

function App() {
    const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
    const [previousFocusEl, setPreviousFocusEl] = useState(null);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const addTask = (task) => {
        setTasks(prevState => [...prevState, task])
    }

    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter(task => task.id !== id));
    }

    const toggleTask = (id) => {
        setTasks(prevState => prevState.map(task => (
            task.id === id
                ? { ...task, checked: !task.checked }
                : task
        )))
    }

    const updateTask = (task) => {
        setTasks(prevState => prevState.map(t => (
            t.id === task.id
                ? { ...t, name: task.name }
                : t
        )))
        closeEditMode();
    }

    const closeEditMode = () => {
        setIsEditing(false);
        previousFocusEl.focus();
    }

    const enterEditMode = (task) => {
        setEditedTask(task);
        setIsEditing(true);
        setPreviousFocusEl(document.activeElement);
    }

  return (
    <div className="container">
        <header >
            <h1>To Do</h1>
        </header>
        {
            isEditing && (
                <EditForm
                    editedTask={editedTask}
                    updateTask={updateTask}
                    closeEditMode={closeEditMode}
                />
            )
        }
        <CustomForm addTask={addTask}/>
        {tasks && (
            <List
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
            />
        )}
    </div>
  );
}

export default App;
