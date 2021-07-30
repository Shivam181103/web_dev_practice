
let fs=require("fs");


// -n ...............................

function nCommand(splittedArr, content) {


    splittedArr = content.split("\r\n");
    let tempArr = splittedArr;
    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = (i + 1) + ". " + tempArr[i];
    }
    content = "";
    for (let i = 0; i < tempArr.length; i++) {

        content += tempArr[i] + "\r\n";
    }
    //  console.log(content);

  return content;

    // end n ...........................................................

}
module.exports={
    nkey:nCommand
}