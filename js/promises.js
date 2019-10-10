// Promises

const posts = [
  { title: "Post One", body: "This is about Football (post one)" },
  { title: "Post Two", body: "This is about Science (post two)" }
];

function getPosts() {
  // setTimeout is being used to simulate the kind of delays that servers give before givng back data (in this case 3 seconds)
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

// A Promise takes a special callback as a parameter
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post); // the error check needs to happen right after the post gets pushed on
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went Wrong");
      }
    }, 3000);
  }); // close Promise
}

//===== Async / Await ======
// This is the most Elegant way to handle Promises ES6
// async function init() {
//   await createPost({
//     title: "Post Five",
//     body: "This is about Async / Await (post 5)"
//   });
//   getPosts();
// }

// init();

//===== Async / Await with Fetch ======
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json(); //clean up the json formatting
  console.log(data);
}

fetchUsers();

// createPost({
//   title: "Post Four",
//   body: "This is about Promises (post 4)"
// })
//   .then(getPosts)
//   .catch(err => console.log(err));

// const promise1 = Promise.resolve("Hello World, i'm a promise");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 4000, "Goodbye World")
// );

// the Fetch for the fetch API is weird so you have to do 2 .then() functions on it. one to clean up the json formatting so the second one gives you the values you want, as shown below
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   res => res.json() //clean up the json formatting
// );

// Promise.all takes an array of promises to run
// Promise.all([promise1, promise2, promise3, promise4])
//   .then(values => console.log(values))
//   .catch(err => console.log(err));
