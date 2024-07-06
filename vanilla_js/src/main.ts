interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todoContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };
  todos.push(todo);
  todoInput.value = "";
  console.log(todos, "todos array");
  renderTodo(todos);
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo = document.createElement("div") as HTMLDivElement;
  todo.className = "todo";

  // Create Checkbox
  const checkBox = document.createElement("input") as HTMLInputElement;
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      if (item.id === id) item.isCompleted = checkBox.checked;
    });
    paragraph.className = checkBox.checked ? "textCut" : "";
  };

  // Creating p for title
  const paragraph = document.createElement("p") as HTMLParagraphElement;
  paragraph.innerText = title;
  paragraph.className = isCompleted ? "textCut" : "";

  // Creating delete button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerHTML = "X";
  btn.className = "deleteButton";
  btn.onclick = () => {
    const index = todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
    renderTodo(todos);
  };

  // Appending all elements to todoItem
  todo.append(checkBox, paragraph, btn);
  todoContainer.append(todo);
};

const renderTodo = (todos: Todo[]) => {
  todoContainer.innerHTML = ""; // Clearing previous todos
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
};
