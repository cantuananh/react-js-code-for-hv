import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function Todo() {
    const [tasks, setTasks] = useState([
        "Hoc ReactJS", "Hoc Python"
    ]);

    const [task, setTask] = useState("");

    const handleAddNewTask = (newTask) => {
        setTasks(previosTasks => [newTask, ...previosTasks])
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(task.trim() === "") return;

        handleAddNewTask(task);
        setTask("")
    }

    return (
        <div>
            <TodoForm task={task} setTask={setTask} handleSubmitForm={handleSubmitForm} />
            <TodoList tasks={tasks} />
        </div>
    );
}

export default Todo;