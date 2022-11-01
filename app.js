const axios = require("axios");
const fs = require("fs");

// async function myFunc() {
//   return await axios
//     .get("https://reqres.in/api/users?page=1")
//     .then((res) => res.data)
//     .catch((err) => err);
// }
// myFunc()
//   .then((data) => console.log(res))
//   .catch((err) => err);

//Use the above URL (test API link) to read from data from API (JSON format) and display the data. (use list users)(using Promise)

function myNewFunc() {
  let resonse = new Promise((resolve, reject) => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
  return resonse;
}

myNewFunc()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//2)	Read a JSON file and display the content in console (terminal). 3)	Extension to above task (#2) pass the filename as parameter from command line
// run  node app input.json
const fileNames = process.argv.splice(2);
//Async way to display data
fileNames.forEach((fileName) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    console.log(` ${fileName} file data is`, JSON.parse(data));
  });
});
