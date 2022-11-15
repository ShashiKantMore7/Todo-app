import Task from "./Task";

const ItemList = ({
  tasks,
  handleDoubleClick,
  setEditableId,
  editableId,
  handleEditing,
  handleDelete,
}) => {
  return (
    <div className="items-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDoubleClick={handleDoubleClick}
          handleEditing={handleEditing}
          handleDelete={handleDelete}
          setEditableId={setEditableId}
          editableId={editableId}
        />
      ))}
    </div>
  );
};

export default ItemList;
