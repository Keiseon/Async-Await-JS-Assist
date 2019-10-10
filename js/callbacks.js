// Callbacks are important because they help the code to run and still capture delayed data returned by the server

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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post); // the callback needs to happen right after the post gets pushed on
    callback(); // this is the callback
  }, 3000);
}

createPost(
  { title: "Post Three", body: "This is about Cooking (post three)" },
  getPosts
);

getPosts();
