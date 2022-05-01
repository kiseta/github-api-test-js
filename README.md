# About
GitHub API Test (POST the Gist via GitHub API) 

Test Example contains 3 tests:
- Test 1 - Create a new gist - expected results: Status 201, OK
- Test 2 - Create a new gist - **no file parameter** - expected result: Status 422, Invalid request
- Test 3 - Create a new gist - **no user agent** - expected result: Status 403, Request forbidden

# Dependencies

This project requires Node.js installed on your local machine before installing any of the dependencies below. The dependencies below will allow to write API tests using JavaScript.

### SuperTest
SuperTest is a module built on top of SuperAgent, which is a HTTP request library. SuperTest adds an abstraction on top of SuperAgent to easily test API requests.

### Mocha
Mocha is a popular JavaScript test framework that runs on Node.js.

## How to use
#### Clone the project to your local machine

```
git clone git@github.com:kiseta/github-api-test-js.git
```
#### Install the dependencies from package.json
```
npm install
```
#### Update Value for API Authorization Token in config.js file (**requred**)
```
apiToken : ""
```
#### To obtain GitHub Authorization token:
- Login to your GitHub account
- Open your account 'Settings'
- Select '<>Developer Settings' (bottom of the left hand side menu)
- Select ':key: Personal access tokens'
- Generate new token - *copy the token as its value only available at the time of creation.*

#### Other (optional) parameters to update in config.js file:

```
userAgent : ''
gistName : ''
gistDescription : ''
fileContent : ''
```
#### Run the tests
```
npm test
```
### Results Example

```bash

> api-test@1.0.0 test
> mocha "test.js"



  GitHub API POST Gist API Tests

-------------------- 1: POST New Gist -----------------------------------
 {
  Authorization: 'token ghp_YourOwnAuthorizationTokenWillAppearHere',
  'User-Agent': 'GitHub Api JavaScript Test'
} {
  accept: 'application/vnd.github.v3+json',
  description: 'Test Gist created via JavaScript GitHub API test',
  public: true,
  files: {
    New_Gist: {
      content: 'UBC IRP Student QA! Posted on: 2022-04-30, 11:10:36 p.m.'
    }
  }
}
------------------------------------------------------------
 Status: 201
Gist ID: de2ea10d9176834691afa20b5a2cd3b0
     Test 1 - Create a new gist (742ms)

-------------------- 2: No files -------------------------------------------
 {
  Authorization: 'token ghp_YourOwnAuthorizationTokenWillAppearHere',
  'User-Agent': 'GitHub Api JavaScript Test'
} {
  accept: 'application/vnd.github.v3+json',
  description: 'GIST created by JavaScript code',
  public: true
}
------------------------------------------------------------
 Status: 422
{"message":"Invalid request.\n\n\"files\" wasn't supplied.","documentation_url":"https://docs.github.com/rest/reference/gists#create-a-gist"}
null
     Test 2 - Create a new gist - no file parameter (717ms)

------------------- 3: No User Agent in headers -----------------------
 { Authorization: 'token ghp_YourOwnAuthorizationTokenWillAppearHere' } {
  accept: 'application/vnd.github.v3+json',
  description: 'Test Gist created via JavaScript GitHub API test',
  public: true,
  files: {
    New_Gist: {
      content: 'UBC IRP Student QA! Posted on: 2022-04-30, 11:10:36 p.m.'
    }
  }
}
------------------------------------------------------------
 Status: 403

Request forbidden by administrative rules. Please make sure your request has a User-Agent header (https://docs.github.com/en/rest/overview/resources-in-the-rest-api#user-agent-required). Check https://developer.github.com for other possible causes.

     Test 3 - Create a new gist - no user agent (521ms)


  3 passing (2s)


```

## Resources
Setting up Authorisation Headers for GitHub API

https://github.com/visionmedia/supertest/issues/398

---

Code Examples how to use SuperTest module

https://www.npmjs.com/package/supertest

---

Getting started with API Test Automation using JavaScript

https://www.digitalonus.com/getting-started-with-api-test-automation-using-javascript/
