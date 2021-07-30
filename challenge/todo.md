# wcat........

It is basically used to display mutiple file content with some modification on the terminal .
And those basic modification commands are given below:

# Commands...............

1. wcat <filepath> ->> It will give the content of the file on the terminal 
2. wcat <filepat1 filepath2 ... ->> You can give multiple file path and it returns u all the content of all files.
3. wcat <filepath> -s ->> This command remove the more than one break lines into one break line ,this command is also applied on multiple files.
4. wcat <filepath> -n  ->> This command gives the numbering for everyline in file .And This command is also applied on multiple files.
5. wcat <filepath> -b  ->>This command gives hte numbering for only those lines which is not empty  in the file ,and is also applicable for multiple files.
6. You can also mix more than one commands together  and all commands will apply perfectlly.
7. If you use the command like wcat <filepath1> <filepath2> .  .  . (-s|-b|-n) >> <filePath> than it create a file named <filePath>  and copy all the data into that file.
8. Same If you use the command like wcat <filepath1> <filepath2> .  .  . (-s|-b|-n) > <filePath> than it will paste or append all the data into existing gile <filePath> .

##### You can also mix commands.

# Edge cases.....

1. If the given file path doesn't exists than simply return without any change .
2. If you find -b and -n together than apply that command which comes first in the input .


# Thanks...