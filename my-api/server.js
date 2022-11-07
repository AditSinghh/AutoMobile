const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request-promise');
// var multer = require('multer');
// const apiRouter = require('./apiRouter');
const PORT= 4000;
app.use(bodyParser.json());

// Excel to JSON
// fs = require('fs');

// node_xj = require("convert-excel-to-json");
// node_xj({
//   sourceFile: "Digital.xls"  // input xls 
// });

// var data = node_xj({
//   sourceFile: "Digital.xls"  // input xls 
// })

// console.log(JSON.stringify(data))
// fs.writeFile("output.json", JSON.stringify(data), 
//   (err)=>{
//     console.log(err)
//   }
// )           


// app.use('/testOracleapi', oracle);

//Create a GET API call
app.get('/testOracleapiget', function (req, res) {
  const options = {
    method: 'GET',
    uri: 'https://fa-esbc-dev7-saasfademo1.ds-fa.oraclepdemos.com/fscmRestApi/resources/11.13.18.05/announcements',
    // body: JSON.stringify(req.body),
    json: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic Q2FzZXkuQnJvd246V2VsY29tZUAxMjM=',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers': "Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Credentials": "true"
    }
  }
// console.log(options,">>>>>>>>>>>>>>>>>>>>>>")
  request(options).then(function (response) {
    res.send(response);
  })
    .catch(function (err) {
      res.send(err);
    })
})


//Created a new POST API call
// app.post('/testOracleapi', function (req, res) {
//     const options = {
//       method: 'POST',
//       uri: 'https://fa-esbc-dev7-saasfademo1.ds-fa.oraclepdemos.com/fscmRestApi/resources/11.13.18.05/receivablesInvoices',
//       body: JSON.stringify(req.body),
//       json: true,
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic Q2FzZXkuQnJvd246V2VsY29tZUAxMjM='

//       }
//     }
//   // console.log(options,">>>>>>>>>>>>>>>>>>>>>>")
//     request(options).then(function (response) {
//       res.send(response);
//     })
//       .catch(function (err) {
//         res.send(err);
//       })
//   })
 


app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});
 
 
module.exports = app;