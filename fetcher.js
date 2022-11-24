const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fetchUrl = (initStr) => {
  

  let url = initStr[2];
  let filePath = initStr[3];

  console.log(url);
  console.log(filePath);
  

  request(url, (error, response, body) => {
    if (error) {
      console.log("URL no exist");
      process.exit();
    }
    console.log("=====================");
    writeToFileSystem(body, filePath, confirmation);
  });

  // console.log(request.body);
};

const writeToFileSystem = (body, filePath, confirmation) => {
  // console.log(body);

  // let fyl = fs.statSync(filePath);
  // console.log(fyl.isFile());

  fs.writeFile(`./${filePath}.txt`, body, error => {
    if(filePath) {
      console.log("The filepath already exists");
      rl.question("Do you want to overwrite this file? (Y/N) ", (answer) => {
        if(answer === "n" || answer === "N") {
          process.exit();
        }
      });
    }
    
    if (!error) confirmation("yaay");
    
  });
}

const confirmation = function(flag) {
  console.log(flag);
  process.exit();
}

fetchUrl(process.argv);