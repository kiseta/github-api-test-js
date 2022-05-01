// config.js

var config = { 
  baseUrl: "https://api.github.com",
  apiToken: "",
  userAgent:"GitHub API Test example",
  gistName: "New_Gist_via_API",
  gistDescription: "Test Gist created via JavaScript GitHub API test",
  fileContent: "UBC IRP Student QA! Posted on: " + new Date().toLocaleString()
}

module.exports = config;