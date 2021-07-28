#!/usr/bin/env node

let path=require("path");

let fs = require("fs");
let helpobj=require("./commands/help");
let orgobj=require("./commands/organise");
let treeobj=require("./commands/tree");
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
                helpobj.helpKey();
                break;
            }
       
        case "organise":
            {
                orgobj.orgKey(array[1]);
                break;
            }
       
        case "tree":
            {
                treeobj.treeKey(array[1]);
                break;
            }
    
        default:
            {
                console.log("Enter the right key");
            }
       
}

