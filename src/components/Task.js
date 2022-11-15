const Task = ({
  task,
  handleDoubleClick,
  setEditableId,
  editableId,
  handleEditing,
  handleDelete,
}) => {
  const handleSubmission = (e) => {
    e.target.style.display = "none";
    setEditableId("");
  };
  return (
    <div className="to-do-item">
      <span
        className="name"
        key={task.id}
        id={task.id}
        style={task.complete ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleDoubleClick(task.id)}
        suppressContentEditableWarning={true}
        contentEditable={editableId === task.id ? true : false}
      >
        {task.taskName}
      </span>
      <div className="action">
        <button
          id={"edit" + task.id}
          style={{ display: editableId === task.id ? "inline" : "none" }}
          onClick={(e) => handleSubmission(e)}
        >
          Enter
        </button>
        <button onClick={() => handleEditing(task.id)}>Edit</button>
        <span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </span>
      </div>
    </div>
  );
};

export default Task;
