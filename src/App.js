import { useState, useEffect } from "react";
import "./App.css";
import { CgCheckR } from "react-icons/cg";
import ToDoList from "./components/ToDoList";
import CreateTask from "./modals/CreateTask";
import { getItems, setItems } from "./services/localstorage";

function App() {
  // TODO: Now Implement web local storage , to save task detail. 
  const [isAddForm, setIsAddForm] = useState(false);
  const [taskList, setTaskList] = useState([]);

  function addNewTask(newTask){
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList);

    // Update LocalStorage with new Task
    setItems(newTaskList);
    setIsAddForm(false);
  }

  // Update Task-detail From Task List
  function updateTaskList(){

  }

  // Delete Task from List
  function deleteTaskFromList(payload){
    // Now Filter the Task
    const newTaskList = taskList.filter((value) => {
      if (payload.task_name === value.task_name) {
        return false;
      }
      return true;
    });
    // set TaskList state
    setTaskList(newTaskList);
    // Update new Task on Local Storage.
    setItems(newTaskList)

  }
  useEffect(() => {
    const tasks = getItems();

    if (tasks){
      setTaskList(tasks);
    }

  }, [])
  return (
    <div className="container mx-auto">
      {/* Header Start */}
      <header className="header">
        <div className="m-5 gap-6 flex justify-center">
          <CgCheckR size="4rem" color="red" />
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
      <CreateTask isFormOpen={isAddForm} addNewTask={addNewTask} setFormStatus={setIsAddForm} />
      <ToDoList taskList={taskList} deleteTask={deleteTaskFromList} />
    </div>
  );
}

export default App;
