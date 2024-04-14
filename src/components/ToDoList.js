import { useEffect, useState } from "react";
import Card from "./Card";

function ToDoList({taskList}) {
  
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
            <Card i={index} task={task}/>
          );
        })}
        {/* Task Card END */}
      </div>
    </div>
  );
}

export default ToDoList;
