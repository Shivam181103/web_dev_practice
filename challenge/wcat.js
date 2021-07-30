#!/usr/bin/env node

const { clear } = require("console");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
let fs = require("fs");

let bfun = require("./commands/bCommand");
let nfun = require("./commands/nCommand");
let sfun = require("./commands/sCommand");

let inputArr = process.argv.slice(2);

let options = [];
let files = [];
for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].charAt(0) == "-") {
        options.push(inputArr[i]);
    }
    else {
        files.push(inputArr[i]);
    }

}


//// check command have correct file path or not 

for (let i = 0; i < files.length; i++) {
    let haveFile = fs.existsSync(files[i]);

    if (haveFile == false) {
        console.log(`File ${files[i]} doesn't exists. `);
        return;
    }
}

let content = "";
for (let i = 0; i < files.length; i++) {
    let bufferContent = fs.readFileSync(files[i]);
    content += bufferContent + "\r\n";
}

//

let splittedArr = content.split("\r\n");

if (options.includes("-s") == true) {
    content = sfun.skey(splittedArr, content);
}

if (options.includes("-n") == true && options.includes("-b") == true) {
    for (let i = 0; i < options.length; i++) {
        if (options[i] == "-n") {
            content = nfun.nkey(splittedArr, content);
            break;
        }
        if (options[i] == "-b") {
            content = bfun.bkey(splittedArr, content);
            break;
        }
    }
}
else {
    if (options.includes("-n") == true) {
        content = nfun.nkey(splittedArr, content);
    }
    if (options.includes("-b") == true) {
        content = bfun.bkey(splittedArr, content);
    }

}
console.log(content);






// if(inputArr[inputArr.length-2]==">>")
// {
//     fs.writeFileSync(inputArr[inputArr.length-1],content);
// }

// if(inputArr[inputArr.length-2]==">")
// {
//     fs.writeFileSync(inputArr[inputArr.length-1],content);
// }
