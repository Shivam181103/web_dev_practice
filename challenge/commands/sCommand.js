let fs =require("fs");

// -s ..................................................................
function sCommand(splittedArr, content) {


    let contentArr = splittedArr;
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];

    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    // console.log(tempArr);

    //let fileAfterCommand;
     content = "";
    for (let i = 0; i < tempArr.length; i++) {

        content += tempArr[i] + "\r\n";
    }
    // console.log(content);
   return content;

    //...................................................................

}
module.exports={
    skey:sCommand
}