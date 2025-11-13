function fetchData(url, callback) {
  // TODO: After 800ms, call callback with { message: "hello world" }
  setTimeout(()=>{
    let data = "hello world";
    callback(data);
  },800)
}

function handleData(data) {
  // TODO: Print data.message in uppercase
  console.log(data.toUpperCase());
}

fetchData("example.com", handleData);