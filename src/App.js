import { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import CreateTask from "./modals/CreateTask";
import { getItems, setItems } from "./services/localstorage";
import EditTask from "./modals/EditTask";

function App() {
  const [isAddForm, setIsAddForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(null);
  const [taskList, setTaskList] = useState([]);

  function addNewTask(newTask) {
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);

    // Update LocalStorage with new Task
    setItems(newTaskList);
    setIsAddForm(false);
  }

  // Update Task-detail From Task List
  function updateExistingTask(id, updatedTask) {
    const newTaskList = taskList.map((value) => {
      if (id === value.id) {
        value.task_name = updatedTask.task_name;
        value.task_description = updatedTask.task_description;
      }
      return value;
    });
    setTaskList(newTaskList);
    setItems(newTaskList);
  }

  // Delete Task from List
  function deleteTaskFromList(payload) {
    // Now Filter the Task
    const newTaskList = taskList.filter((value) => {
      if (payload.id === value.id) {
        return false;
      }
      return true;
    });
    // set TaskList state
    setTaskList(newTaskList);
    // Update new Task on Local Storage.
    setItems(newTaskList);
  }
  useEffect(() => {
    const tasks = getItems();

    if (tasks) {
      setTaskList(tasks);
    }
  }, []);
  return (
    <div className="container mx-auto">
      {/* Header Start */}
      <header className="header">
        <div className="m-5 gap-6 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-wit h-14 text-red-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>

          <h1 className="text-5xl text-center text-sky-600 font-bold underline">
            My Todo-s
          </h1>
        </div>
      </header>
      {/* Header End */}

      {/* Task Create Button Start */}
      <div className="md:w-2/3 md:mx-auto">
        <div className="h-16 mx-3 px-3 grid content-center bg-gray-700 rounded-2xl">
          <button className="text-white" onClick={() => setIsAddForm(true)}>
            <div className="create-task text-start ps-3 pt-2 bg-gray-900 h-10 rounded-2xl">
              Create Task....
            </div>
          </button>
        </div>
      </div>

      {/* Task Create Button End */}
      {isAddForm && (
        <CreateTask addNewTask={addNewTask} setFormStatus={setIsAddForm} />
      )}
      {isEditForm != null ? (
        <EditTask
          updateTask={updateExistingTask}
          taskPayload={isEditForm}
          toggleEditForm={setIsEditForm}
          taskList={taskList}
        />
      ) : (
        <></>
      )}
      <ToDoList
        taskList={taskList}
        deleteTask={deleteTaskFromList}
        openEditForm={setIsEditForm}
      />
    </div>
  );
}

export default App;
