const taskContainer = document.querySelector(".task-container");

let tasks = [
  {
    name: "Practice CSS Animations",
    priority: 1,
  },
  {
    name: "Dev Community Work",
    priority: 4,
  },
  {
    name: "Algorithm Studies",
    priority: 3,
  },
];

//sort by priority
const descendingTasks = tasks.sort(
  (taskA, taskB) => taskA.priority - taskB.priority
);

function render() {
  descendingTasks.forEach((task) => {
    const taskBlock = document.createElement("div");
    const deleteElement = document.createElement("p");
    const title = document.createElement("p");
    const controller = document.createElement("button");

    taskBlock.classList.add("task-block");
    deleteElement.classList.add("delete-icon");
    controller.classList.add("controller-button");

    deleteElement.textContent = "🅇";
    title.textContent = task.name;
    controller.textContent = "START";

    taskBlock.append(deleteElement, title, controller);
    taskContainer.append(taskBlock);
  });
}
render();
