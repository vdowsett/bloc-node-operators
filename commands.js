const fs = require("fs");

//write out data
 function done(output) {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

//where we will store our commands
 function evaluateCmd(userInput) {
  //parses the user input to understand which command was typed
   const userInputArray = userInput.split(" ");
   const command = userInputArray[0];

   switch (command) {
       case "echo": commandLibrary.echo(userInputArray.slice(1).join(" "));
       break;
       case "cat": commandLibrary.cat(userInputArray.slice(1));
       break;
       case "head": commandLibrary.head(userInputArray.slice(1));
       break;
       case "tail": commandLibrary.tail(userInputArray.slice(1));
       break;
       default: commandLibrary.errorHandler(userInputArray[0]); 
   }
 }

//where we will store the logic of our commands
 const commandLibrary = {
     //the echo command
     "echo": function(userInput) {
         done(userInput);
     },
     //the cat command
     "cat": function(fullPath) {
         const fileName = fullPath[0];
         fs.readFile(fileName, (err, data) => {
             if (err) throw err;
             done(data);
         });
     },
     //the head command prints first lines of input in this function (n > 5)
     head: function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
          if (err) throw err;
          let dataArray = data.toString().split('\n');
          let lines = [];
          for (let i = 0; i < 5; i++) {
            lines.push(dataArray[i]);
          }
          data = lines.join('\n');
          done(data);
        });
      },
      //the tail command prints last lines of input, in this funciton (n < 5)
      tail: function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
          if (err) throw err;
          let dataArray = data.toString().split('\n');
          let lines = [];
          for (let i = dataArray.length - 6; i < dataArray.length; i++) {
            lines.push(dataArray[i]);
          }
          data = lines.join('\n');
          done(data);
        });
      },
      errorHandler: function(userInput) {
          done('Error');
      }
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;