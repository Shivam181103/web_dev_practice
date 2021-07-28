#!/usr/bin/env bash
let fs=require("fs");
let path=require("path");
const { send } = require("process");

let array=process.argv.slice(2);

let varry=array[0];

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

switch(varry)
{
        case "help":
            {
                help();
                break;
            }
       
        case "organise":
            {
                organise(array[1]);
                break;
            }
       
        case "tree":
            {
                treef(array[1]);
                break;
            }
    
        default:
            {
                console.log("Enter the right key");
            }
       
}

function help()
{
    console.log(`
    List of all commands:
                         1. node main.js tree "directoryPath"
                         2. node main.js organize "directoryPath"
                         3. node main.js help
    `);
}
function organise(dirPath)
{

    if(dirPath==undefined)
    {
       destPath=process.cwd();
       return ;
    }
    else{

        let isexists=fs.existsSync(dirPath);
        if(isexists==true)
        {
            let destPath=path.join(dirPath,"organised");
            fs.mkdirSync(destPath);
           Organise_helper(dirPath,destPath);
        }
        else{
            console.log("Kindly enter the right key");
            return;
        }
    }
}

function Organise_helper(dirPath,destPath)
{
   let childs=fs.readdirSync(dirPath);

   for(let i=0;i<childs.length;i++)
    {
        let child=childs[i];
        let childPath=path.join(dirPath,child);
         
        let isfile=fs.lstatSync(childPath).isFile();
        if(isfile)
        {
            let catagory=getCatagory(childs[i]);

            sendfile(destPath,childPath,catagory);
        }
    }
}

function sendfile(destPat,childPat,catagor){

    let organise_dir=path.join(destPat,catagor);
    if(fs.existsSync(organise_dir)==false)
    {
       fs.mkdirSync(organise_dir); 
    }
    let file=path.basename(childPat);
    let destFilePath=path.join(organise_dir,file);

    fs.copyFileSync(childPat,destFilePath);
    console.log('file send from src to dest');
    fs.unlinkSync(childPat);
}

function getCatagory(child)
{
    let extname=path.extname(child);

    for(let type in types)
    {
        let exFileofType=types[type];
        for(let i=0;i<exFileofType.length;i++)
        {
            if(extname.slice(1)==exFileofType[i])
            {
                return type;
            }
        }
       
    }
    return "others";
}

function treef(dirPath)
{
    if(dirPath==undefined)
    {
        treefun(process.cwd(),"");
        return ;
    }
    else{

        let isexists=fs.existsSync(dirPath);
        if(isexists==true)
        {
            treefun(dirPath,""); 
        }
        else{
            console.log("Kindly enter the right key");
            return;
        }
    }
}

function treefun(dirPath,space)
{
    

    let isitfile=fs.lstatSync(dirPath).isFile();
    if(isitfile===true)
    {
        let leaf=path.basename(dirPath);
        console.log(space + "├──" + leaf);
        
    }
    else{
        let dirName = path.basename(dirPath)
        console.log(space + "└──" + dirName);
        let children=fs.readdirSync(dirPath);
        for(let child in children)
        {
            let childars=path.join(dirPath,children[child]);
            treefun(childars,space+"\t");
        }
    }
}