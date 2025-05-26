function TodoForm({handleSubmitForm, setTask, task}) {
    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text"
                placeholder="Type todo..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            ></input>
        </form>
    );

}

export default TodoForm;