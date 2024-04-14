import Card from "./Card";

function ToDoList() {
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
        {Array.from(Array(10), (x) => x).map((i) => {
          return (
            <Card i={i}/>
          );
        })}
        {/* Task Card END */}
      </div>
    </div>
  );
}

export default ToDoList;
