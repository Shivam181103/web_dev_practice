
let path=require("path");

let fs = require("fs");
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
module.exports=
{
    orgkey:organise
}