// test.js

var config = require('./config');
const baseUrl = config.baseUrl;
const apiToken = config.apiToken;
const gistDescription = config.gistDescription;
const userAgent = config.userAgent;
const fileConent = config.fileContent;
const gistName = config.gistName;
const hr = '------------------------------------------------------------\n'

var request = require("supertest")(baseUrl);
// const assert = require('chai').assert; 

var headers = {"Authorization": "token " + apiToken, "User-Agent": userAgent};
var headers_no_userAgent = {"Authorization": "token " + apiToken};
var params = {"scope": "gist"};
var data = {"accept":"application/vnd.github.v3+json",
            "description": gistDescription,
            "public":true,
            "files":{[gistName] :{"content": fileConent}}
            };

var data_no_files = {"accept":"application/vnd.github.v3+json",
            "description": gistDescription,
            "public":true,
            };

describe('GitHub API POST Gist API Tests', () => {
    // --------------------------GitHub API POST Gist Tests --------------------------


     it('Test 1 - Create a new gist', function(done) {
        console.log('\n-------------------- 1: POST New Gist -----------------------------------\n', headers, data);
        request
          .post('/gists')
          .set(headers)
          .send(data)
          .expect(201)
          .end(function(err, res) {
            // console.log(hr, res)
            console.log(hr, "Status:", res.status)
            console.log("Gist ID:", res.body.id);
            if (err) return done(err);
            return done();
            
          });
      });

      it('Test 2 - Create a new gist - no file parameter', function(done) {
        console.log('\n-------------------- 2: No files -------------------------------------------\n',headers, data_no_files);  
        request
          .post('/gists')
          .set(headers)
          .send(data_no_files)
          .expect(422)
          .end(function(err, res) {
            console.log(hr,"Status:", res.status)
            console.log(res.text);
            console.log(err);
            if (err) return done(err);
            return done();
            
          });
      });

    

    it('Test 3 - Create a new gist - no user agent', function(done) {
        console.log('\n------------------- 3: No User Agent in headers -----------------------\n', headers_no_userAgent, data);
        request
          .post('/gists')
          .set(headers_no_userAgent)
          .send(data)
          .expect(403)
          .end(function(err, res) {
            console.log(hr,"Status:", res.status)
            console.log(res.text);
            if (err) return done(err);
            return done();
            
          });
      });

});