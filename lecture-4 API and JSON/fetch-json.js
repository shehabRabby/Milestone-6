// const loadData = () => {
//   const output = fetch("https://jsonplaceholder.typicode.com/todos/1") //fetch -> promise of response
//     .then((response) => response.json()) //json() -> json data deyar promise korbe
//     .then((data) => console.log(data)); // json jeta dibe seta ei data variable receive korbe and console log kore dekhabe
// };

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // array of object pabo
      displayPost(data);
    });
};

//eta akta array of object receive korse
const displayPost = (post) => {
  //Now, UI te dekhabo ki vabe//1.get the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";//suru tei null dekhabe
  // console.log(postContainer);

  post.forEach((element) => {
    //   console.log(element.title);
    //2.create HTML element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
      <div class="post-card">
        <h2>${element.title}</h2>
        <p>${element.body}</p>
      </div>`;

    //3.add li to parent container
    postContainer.append(postCard);
  });
};

// loadPost() click charai show korbe byDefault