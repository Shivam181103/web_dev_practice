
let path=require("path");

let fs = require("fs");

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

module.exports=
{
    treeKey:treef
}