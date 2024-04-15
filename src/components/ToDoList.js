// import { useEffect, useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

function ToDoList({ taskList, deleteTask }) {
  useEffect(() => {
    const handleMessage = (e) => {
      // Check for message & call the appropriate callback methods if applicable.
      const message = e.data;
      if (message.type === "DELETE_TASK") {
        deleteTask(message.payload);
      }
    };
    window.postMessageRegistered = true;
    window.addEventListener("message", handleMessage);

    return () => {
      // Cleanup function >> even cleanup
      window.removeEventListener("message", handleMessage);
    };
  }, [deleteTask]);

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
            />
          );
        })}
        {/* Task Card END */}
      </div>
    </div>
  );
}

export default ToDoList;
