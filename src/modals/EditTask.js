import React, { useState } from "react";
import { initialForm } from "./CreateTask";

function EditTask({ toggleEditForm, taskPayload, updateTask, taskList }) {
  const [taskForm, setTaskForm] = useState(() => taskList[taskPayload.index]);

  function handleTaskUpdateFormSubmit(e) {
    e.preventDefault();
    console.log("Edit Form is Submitted");
    updateTask(taskPayload.id, taskForm);
    toggleEditForm(null);
    setTaskForm(initialForm);
  }

  return (
    <div className="modal-container border-2 border-red-800 fixed top-0 bottom-0 left-0 right-0">
      <div className="max-w-[700px] max-h-[600px] absolute top-1/4 bottom-10 left-10 right-10 md:left-1/3 md:right-1/3 shadow-2xl shadow-violet-300 rounded-2xl bg-sky-800 p-5">
        <div className="grid grid-cols-4">
          <h3 className="text-white col-span-3 font-bold text-2xl">
            Update Task
          </h3>
          <svg
            className="h-12 w-20 ms-auto text-white hover:text-red-500"
            onClick={() => toggleEditForm(null)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <hr className="my-3" />
        <form
          className="h-5/6 flex flex-col justify-between"
          onSubmit={handleTaskUpdateFormSubmit}
        >
          <div className="flex flex-col">
            <label
              className="text-white font-bold leading-loose"
              htmlFor="updateTaskName"
            >
              Task Name
            </label>
            <input
              type="text"
              className="my-2 bg-gray-300 focus:bg-white rounded-md h-9 ring-offset-2 ring ring-violet-300 ring-offset-neutral"
              name="updateTaskName"
              id="updateTaskName"
              value={taskForm.task_name}
              onChange={(e) =>
                setTaskForm({ ...taskForm, task_name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-white font-bold leading-loose"
              htmlFor="updateTaskDescription"
            >
              Task Description
            </label>
            <textarea
              name="updateTaskDescription"
              className="bg-gray-300 focus:bg-white rounded-md ring-offset-2 ring ring-violet-300 ring-offset-neutral"
              id="updateTaskDescription"
              cols="30"
              rows="5"
              value={taskForm.task_description}
              onChange={(e) =>
                setTaskForm({ ...taskForm, task_description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="flex place-content-end gap-10 mt-5">
            <button
              type="submit"
              className="update ring ring-offset-1 ring-violet-300 rounded-md w-20 text-white font-bold bg-green-500 hover:ring-violet-500 hover:ring-offset-2 hover:bg-green-700 capitalize"
            >
              update
            </button>
            <button
              className="ring ring-offset-1 ring-violet-300 rounded-md w-20 text-white font-bold bg-red-500 hover:ring-violet-500 hover:ring-offset-2 hover:bg-red-700 capitalize"
              onClick={() => toggleEditForm(null)}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
