// TODO: Include packages needed for this application
const inquirer= require ("inquirer")   
const fs= require('fs')
// TODO: Create an array of questions for user input
const questions = [
      {
        name: 'projectname',
        message: 'What is your project name?',

      },
        {
         name: 'description',
         message: 'What is the description?',   
        },

        {name: 'installation',
        message: 'How do you install the project dependecy?',

        },

        {name: 'usage',
        message: 'How do you run the program?',

        },

        {
            type: "list",
            choices: ["apache","mit","other"], 
            name: "license",
            message: "Please use the license name",

        },

        {name: 'distribute',
        message: 'How do I contribute?',

        },

        {name:'Test',
        Message: 'How do I Test?',
    },

        {name: 'Answer',
        message: 'What questions do i ask?',
    }

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filename = `${data.name
    .toLowerCase()
    .split(' ')
    .join('')}.json`;

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer 
  .prompt(
    questions 
  )
  .then(data =>  {
    console.log(data) 
  });

}

// Function call to initialize app
init();
