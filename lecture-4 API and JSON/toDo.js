const loadToDo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayTodo(data); // niche j displayTodo k nichi seta ekhane call korlam
    });
};

// Another way Async await
// const loadToDo = async () => {
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   const res = await fetch(url);
//   const data = await res.json();
//       displayTodo(data); // niche j displayTodo k nichi seta ekhane call korlam
// };


// data take neyar jonno r akta veriable nibo and ekhane data akta parameter
const displayTodo = (data) => {
  // console.log(data)// ceck korbo ashe kina console e jodi ashe tahole container banabo then step by step
  //1 get id
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = ""; //kono kicu jno na thake e jnno emty

  //loop chalabo ekhn
  data.forEach((element) => {
    console.log(element);

    //card k div er moddhe boshabo
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class="todo-card">
    <p>${
      element.completed == true
        ? `<i class="fa-solid fa-square-check"></i>`
        : `<i class="fa-solid fa-square-xmark"></i>`
    }</p>
    <h4>${element.title}</h4>
    </div>
    `;

    todoContainer.append(todoCard);
  });
};

loadToDo();
