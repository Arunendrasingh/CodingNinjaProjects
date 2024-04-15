
function Card({ task, index }) {
  return (
    <iframe
      className="w-full rounded-xl border-b-4 p-5 border-slate-500"
      title={task.task_name}
      srcdoc={`<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <script src="https://cdn.tailwindcss.com"></script>
                <meta
                name="task"
                content="Task to perform"
                />
                </head>
                <body>
                <div class="card">
                <div class="grid md:grid-cols-9">
                <div class="md:col-span-8">
                  <h1 class="ms-1 text-3xl font-semibold">
                    ${task.task_name}
                  </h1>
                  <span class="ms-3 text-gray-400"><strong>Due By: </strong>${
                    task.due_date
                  }</span>
                  <p class="ms-3 mt-3">
                  ${task.task_description}
                    </p>
                    </div>
                    <div class="m-3 flex items-end justify-between md:me-10 md:flex-col">
                      <svg onclick="window.parent.postMessage({type: 'EDIT_TASK', payload: {index: '${index}', id: ${task.id}}})" class="far fa-edit m-3 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>

                      <svg onclick="window.parent.postMessage({type: 'DELETE_TASK', payload: {index: '${index}', id: ${task.id}}})" class="fas fa-trash-alt m-3 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    </div>
                    </div>
                    </body>
                    <script src="https://cdn.tailwindcss.com"></script>
                    </html>
                    `}
      frameborder="0"
    ></iframe>
  );
}

export default Card;
