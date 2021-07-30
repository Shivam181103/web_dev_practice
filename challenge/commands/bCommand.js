
let fs=require("fs");

// -b start ...............................................................


function bCommand(splittedArr, content) {


    splittedArr = content.split("\r\n");
    let tempArr = splittedArr;

    // console.log("..."+tempArr[4]+" >>>>>")
    let k = 1;
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] != "") {
            tempArr[i] = (k) + ". " + tempArr[i];
            k++;
        }
    }
    content = "";
    for (let i = 0; i < tempArr.length; i++) {

        content += tempArr[i] + "\r\n";
    }
    // console.log(content);
     return content;

}
module.exports={
    bkey:bCommand
}
// b ended ...............................