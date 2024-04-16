// import { useEffect, useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

function ToDoList({ taskList, deleteTask, openEditForm }) {
  // useEffect(() => {
  //   const handleMessage = (e) => {
  //     // Check for message & call the appropriate callback methods if applicable.
  //     const message = e.data;
  //     if (message.type === "DELETE_TASK") {
  //       deleteTask(message.payload);
  //     }else if (message.type === "EDIT_TASK") {
  //       // Update state to open Edit Form
  //       openEditForm(message.payload)
  //     }
  //   };
  //   window.postMessageRegistered = true;
  //   window.addEventListener("message", handleMessage);

  //   return () => {
  //     // Cleanup function >> even cleanup
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, [deleteTask, openEditForm]);

  if (taskList.length < 1){
    return (
      <div className="task-container text-center mt-20">
        <h2 className="text-3xl text-red-500 subpixel-antialiased font-bold decoration-wavy uppercase">No Task Present.</h2>
        <p>Add new Task.....</p>
      </div>
    )
  }

  return (
    <div className="task-container">
      <h1 className="text-center text-4xl text-sky-600 font-bold">
        Task Lists
      </h1>
      <div
        className="border-t-4 border-sky-600 h-[500px] overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* Task Card START */}
        {taskList.map((task, index) => {
          return (
            <Card
              key={index}
              index={index}
              task={task}
              deleteTask={deleteTask}
              openEditForm={openEditForm}
            />
          );
        })}
        {/* Task Card END */}
      </div>
    </div>
  );
}

export default ToDoList;
