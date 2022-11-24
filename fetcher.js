const request = require('request');
const fs = require('fs');

const fetchUrl = (initStr) => {

  let url = initStr[2];
  let filePath = initStr[3];

  console.log(url);
  console.log(filePath);
  

  request(url, (error, response, body) => {
    console.log(error);
    console.log("=====================")
    writeToFileSystem(error, response, body, filePath, confirmation);
  });

  // console.log(request.body);
};

const writeToFileSystem = (error, response, body, filePath, confirmation) => {
  // console.log(body);

  fs.writeFile(`./${filePath}.txt`, body, error => {
    if (!error) confirmation();
  });
}

const confirmation = function() {
  console.log("Done!!!!");
}

fetchUrl(process.argv);