import "./App.css";
import { CgCheckR } from "react-icons/cg";

function App() {
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
          <button className="text-white">
            <div className="create-task text-start ps-3 pt-2 bg-gray-900 h-10 rounded-2xl">
              Create Task....
            </div>
          </button>
        </div>
      </div>
      {/* Task Create Button End */}
      {/* Task List START */}
      <div className="task-container">
        <h1 className="text-center text-4xl text-sky-600 font-bold">Task Lists</h1>
        <div className="border-t-4 border-sky-600 h-[500px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
        {/* Task Card START */}
        {Array.from(Array(10), (x) => x).map((i) => {
          return (
            <div className="card rounded-xl border-b-4 p-5 border-slate-500">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-2">
                  <h1 className="ms-1 text-3xl font-semibold">
                    This is Task Heading
                  </h1>
                  <span className="ms-3 text-gray-400">23-oct-2024</span>
                  <p className="ms-3 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum incidunt pariatur blanditiis natus ullam sequi
                    qui. Cum voluptas, maiores recusandae nisi enim vel
                    praesentium consequatur id? Voluptas saepe maxime
                    voluptatum?
                  </p>
                </div>
                <div className="m-3 flex items-end justify-between md:me-10 md:flex-col">
                  <button className="h-8 w-20 rounded-md bg-lime-400 outline-none ring-2 ring-black ring-offset-2 hover:bg-lime-700 hover:text-white hover:ring-yellow-500">
                    Edit
                  </button>

                  <button className="h-8 w-20 rounded-md bg-red-500 outline-none ring-2 ring-black ring-offset-2 hover:bg-red-800 hover:text-white hover:ring-yellow-500">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* Task Card END */}
        </div>
      </div>
      {/* Task list END */}
    </div>
  );
}

export default App;
