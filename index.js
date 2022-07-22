const fs = require('fs')
const inquirer = require('inquirer')
const InternObject = require("./assets/js/intern")
const EngineerObject = require("./assets/js/engineer")
const ManagerObject = require("./assets/js/manager")

let userInput = {
  "type": "",
  "name": "",
  "id": "",
  "email": "",
  "office": "",
  "gitHub": "",
  "school": "",
}

let endHTML = []

let htmlHeader = `
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>example team</title>
  </head>

  <body>
    <header>
        <h1>Current Team</h1>
    </header>
    <section class="main-content">
`

let htmlFooter = `
        </section>
        <footer>
            <h2>created by Dante Stargiotti</h2>
        </footer>
    </body>
</html>
`

async function homeScreen() {
  await 1
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'homeScreenChoices',
        choices: ['View Team Members', 'Add Team Member', 'Generate HTML File'],
        message: "Select an option.",
      },
    ])
    .then(answers => {
      switch (answers.homeScreenChoices) {
        case 'Add Team Member':
          createTeamMember()
          break
        case 'View Team Members':
          viewTeamMembers(endHTML)
          break
        case 'Generate HTML File':
          createHTML(endHTML)
          break
      }
    })
}

function viewTeamMembers(end) {
    console.log(end)
    homeScreen()
}

async function createTeamMember() {
  await 1
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'newMemberJob',
        choices: ['Intern', 'Engineer', 'Manager'],
        message: "What will the empoloyee's job be?",
      },
      {
        type: 'input',
        name: 'newMemberFirst',
        message: "Enter employee name: ",
      },
      {
        type: 'input',
        name: 'newIdNumber',
        message: "Enter employee ID: ",
      },
      {
        type: 'input',
        name: 'newEmail',
        message: "Enter employee email: ",
      },
    ])
    .then(answers => {
      if ((answers.newMemberFirst !== "") && (answers.newIdNumber !== "") && (answers.newEmail !== "")) {
        userInput.type = answers.newMemberJob
        userInput.name = answers.newMemberFirst
        userInput.id = answers.newIdNumber
        userInput.email = answers.newEmail
        switch (answers.newMemberJob) {
          case 'Intern':
            createIntern()
            break
          case 'Engineer':
            createEngineer()
            break
          case 'Manager':
            createManager()
            break
        }
      } else {
        console.log(`ERR: Empty Input Invalid [createTeamMember]`)
        homeScreen()
      }
    })
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'newGitHub',
        message: "Enter employee's Github username: ",
      },
    ])
    .then(answers => {
      if (answers.newGitHub !== "") {
        userInput.gitHub = answers.newGitHub
        const employeeData = new EngineerObject(userInput.name, userInput.id, userInput.email, userInput.gitHub)
        endHTML.push(employeeData)
        console.log(`New engineer created.`)
        homeScreen()
      } else {
        console.log(`ERR: Empty Input Invalid [createEngineer]`)
        homeScreen()
      }
    })
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internSchoolName',
        message: "Enter intern's current school: ",
      },
    ])
    .then(answers => {
      if (answers.internSchoolName !== "") {
        userInput.school = answers.internSchoolName
        const employeeData = new InternObject(userInput.name, userInput.id, userInput.email, userInput.school)
        endHTML.push(employeeData)
        console.log(`New intern created.`)
        homeScreen()
      } else {
        console.log(`ERR: Empty Input Invalid [createIntern]`)
        homeScreen()
      }
    })
}

function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter manager's office number: ",
      },
    ])
    .then(answers => {
      if (answers.officeNumber !== "") {
        userInput.office = answers.officeNumber
        const employeeData = new ManagerObject(userInput.name, userInput.id, userInput.email, userInput.office)
        endHTML.push(employeeData)
        console.log(`New manager created.`)
        homeScreen()
      }
      else {
        console.log(`ERR: Empty Input Invalid [createManager]`)
        homeScreen()
      }
    })
}

async function createHTML(end) {
  fs.appendFile('generatedPage.html', `${htmlHeader}\n`, () => { })
  await new Promise(resolve => setTimeout(resolve, 1000))
  for (var i = 0; i < end.length; i++) {
    switch (end[i].role) {
      case 'Manager':
        managerDiv(end[i]);
        break
      case 'Engineer':
        engineerDiv(end[i]);
        break
      case 'Intern':
        internDiv(end[i]);
        break
    }
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
  fs.appendFile('generatedPage.html', `${htmlFooter}`, () => { });
  console.log(`HTML file generated.`);
  console.log(`Ending Session.`);
}

function managerDiv(manager) {
  let img = "./assets/images/manager.png";
  let html = `
<div class="employee-box">
  <h3 class="employee-name">${manager.employeeFirst} (Manager)</h3>
  <img class="employee-icon" src="${img}" alt="manager-icon">
  <h5 class="employee-data">ID Number: ${manager.employeeID}</h5>
  <h5 class="employee-data">Email: <a href = "mailto: ${manager.employeeEmail}">${manager.employeeEmail}</a></h5>
  <h5 class="employee-data">Office Number: ${manager.officeNumber}</h5>
</div>
`
  fs.appendFile('generatedPage.html', `${html}\n`, () => { });
}

function engineerDiv(engineer) {
  let img = "./assets/images/engineer.png"
  let html = `
<div class="employee-box">
  <h3 class="employee-name">${engineer.employeeFirst} (Engineer)</h3>
  <img class="employee-icon" src="${img}" alt="engineer-icon">
  <h5 class="employee-data">ID Number: ${engineer.employeeID}</h5>
  <h5 class="employee-data">Email: <a href = "mailto: ${engineer.employeeEmail}">${engineer.employeeEmail}</a></h5>
  <h5 class="employee-data">GitHub Profile: <a href ='https://github.com/${engineer.gitHub}' target="_blank">${engineer.gitHub}</a></h5>
</div>
`
  fs.appendFile('generatedPage.html', `${html}\n`, () => { });
}


function internDiv(intern) {
  let school = intern.employeeSchool;
  let img = "./assets/images/intern.png";
  let html = `
<div class="employee-box">
  <h3 class="employee-name">${intern.employeeFirst} (Intern)</h3>
  <img class="employee-icon" src="${img}" alt="intern-icon">
  <h5 class="employee-data">ID Number: ${intern.employeeID}</h5>
  <h5 class="employee-data">Email: <a href = "mailto: ${intern.employeeEmail}">${intern.employeeEmail}</a></h5>
  <h5 class="employee-data">University: ${school}</h5>
</div> 
`
  fs.appendFile('generatedPage.html', `${html}\n`, () => { });
}

function init() {
  console.log(`Please select an option.`);
}

init()
homeScreen()