const CreateNew = ({ createNewTask, handleChange, taskInp }) => {
  return (
    <div className="create-new">
      <form onSubmit={(e) => createNewTask(e)}>
        <input
          type="text"
          placeholder="Add new task"
          onChange={(e) => {
            handleChange(e);
          }}
          value={taskInp}
        ></input>
        <button type="submit" className="addTask">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
