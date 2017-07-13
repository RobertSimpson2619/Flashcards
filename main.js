var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "What kind of flashcard would you like to make?",
      choices: ["Basic","Cloze"],
      name: "Type"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
]).then(function(inquirerResponse){
  if(inquirerResponse.Type === "Basic"){
    inquirer
      .prompt([
      {
        type: "input",
        message: "What is the question?",
        name: "BasicQ"
      },
      {
        type: "input",
        message: "What is the answer?",
        name: "BasicA"
      }

        ]).then(function(secondResponse){

          var newCard = new BasicCard(secondResponse.BasicQ,secondResponse.BasicA);
          console.log(newCard);

        });

  }else if(inquirerResponse.Type === "Cloze"){
     inquirer
      .prompt([
      {
        type: "input",
        message: "What is the question?",
        name: "ClozeQ"
      },
      {
        type: "input",
        message: "What is the answer?",
        name: "ClozeA"
      }

        ]).then(function(thirdResponse){

          var newCard = new ClozeCard(thirdResponse.ClozeQ,thirdResponse.ClozeA);
          console.log(newCard);

        });
  }
})


