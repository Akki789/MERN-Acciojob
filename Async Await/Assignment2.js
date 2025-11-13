// # Assignment 2 — Convert `.then()` to `async/await` (Keep behavior SAME)
// **Goal:** Preserve logic while changing syntax.
// ### Instructions
// Convert this code to async/await with try/catch (no logic change):

// ```jsx
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(r => r.json())
//   .then(p => fetch(`https://jsonplaceholder.typicode.com/users/${p.userId}`))
//   .then(r => r.json())
//   .then(u => console.log("Author:", u.name))
//   .catch(e => console.error("Error:", e.message));
// ```
// ### Acceptance Criteria
// - Uses `await` for each async step.
// - One `try/catch` wrapping the whole flow.
// - Logs same output on success.
async function getdata() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let post = await res.json();
    let userId = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    let dataid = await userId.json();
    console.log("Author :", dataid.name);
  } catch (err) {
    console.log(err);
  }
}

getdata();
