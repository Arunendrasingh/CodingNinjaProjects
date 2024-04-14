import { useState, useEffect } from "react";
import "./App.css";
import { CgCheckR } from "react-icons/cg";
import ToDoList from "./components/ToDoList";
import CreateTask from "./modals/CreateTask";

function App() {
  // TODO: Now Implement web local storage , to save task detail. 
  const [isAddForm, setIsAddForm] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("task"))
    console.log("Running Use Effect to load", tasks)
    if (!tasks){
      setTaskList([]);
    }else{
      console.log("Setting the Task List.")
      setTaskList(tasks);
    }

  }, [isAddForm])
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
      <CreateTask isFormOpen={isAddForm} setFormStatus={setIsAddForm} />
      <ToDoList taskList={taskList} />
    </div>
  );
}

export default App;
