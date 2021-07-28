

let fs =require("fs");

let path =require("path");
//const { join } = require("path/posix");

//read file:  ...
////let binarydata=fs.readFileSync("abd.js");

//console.log("binary data: "+binarydata);


// //create file :....

// fs.openSync("abc.txt","w");


// // create file with the help of writefilesync....
// // if write.txt exist already then file is replaced by this and data also .....

//fs.writeFileSync("write.txt","this file is created by write sync method");

// // how to update a file data and append in file .....

//fs.appendFileSync("abc.txt","this line is for update data in abc file ");

// //how to check a file exist or not........

// let flag= fs.existsSync("abc.txt");

// if(flag==true)
// {
//     console.log("exists file");
// }
// else{
//     console.log("not exists" );
// }


// // how to make a directory with the help of fs

// fs.mkdirSync("first");

// //check is it a  file or not

// let isfile= fs.lstatSync("abc.txt").isFile()

// if(isfile==true)
// {
//     console.log("yes it is a file");

// }
// else 
// {
//     console.log("it is not a file");
// }


// // check it is a directory or not 

// let isdr= fs.lstatSync("first").isDirectory()

// if(isdr==true)
// {
//     console.log("yes it is a dir");

// }
// else 
// {
//     console.log("it is not a dir");
// }


// // fintion to delete an eixsting file 
// fs.unlinkSync("abd.js");

// // want accessibility by user.......
//fs.accessSync("abc.txt");

// // funtion to remove a directory......
// fs.rmdirSync("first");

// // rename a file.......
//fs.renameSync("abc.txt","nabc.txt");

// // open function for any task in file like write read .....

// let a=fs.openSync("OS.js","r");
// console.log(" "+a);


      /*  here we start path module ***********************************************************************************/

// //funtion to make path like join

// let curPath=process.cwd();  //this funtion to find current working directory path (cwd).....

// let FilePath=path.join(curPath,"abc.txt");

// fs.writeFileSync(FilePath,"hi");

// // to get dir name 

// let dirName=path.dirname('C:\Users\R.K\Desktop\web_dev_practice\Fun_with_node\nabc.txt');
//  console.log(""+dirName);

// //// // basename

// let base=path.basename('Fun_with_node\nabc.txt');

// console.log(base);

// //ext name....

// let filepath="Fun_with_node\abc.txt";

// console.log(path.extname(filepath));