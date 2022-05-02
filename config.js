// config.js

const gistNameList = ["Super_Awesome_Gist_via_API", "New_Gist_via_API", "", "Hi_Im_API_Posted_Gist", "Code_Snippet_on_GitHub_is_called_Gist", "Another_Gist_posted_by_API"];

const rnd = Math.floor(Math.random() * gistNameList.length);
console.log(rnd, gistNameList[rnd]);

var config = { 
  baseUrl: "https://api.github.com",
  apiToken: "", // update with your personal API Token
  userAgent:"GitHub API Test example",
  gistName: gistNameList[rnd],
  gistDescription: "Test Gist created via JavaScript GitHub API test",
  fileContent: "UBC IRP Student QA! Posted on: " + new Date().toLocaleString()
}

module.exports = config;