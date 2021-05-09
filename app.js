const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./library/engineer");
const Manager = require("./library/manager");
const Intern = require("./library/intern");

const Employees = [];

function init(){
    generateHTML();
    addMember();
    managerInfo();
}

function managerInfo(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager's name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "employeeID"
        },
        {
            type: "input",
            message: "Enter manager email address:",
            name: "man_email_addr"
        },
        {
            type: "input",
            message: "Enter office number:",
            name: "officeNum"
        },
    ]).then(response => {
        const manager = new Manager(response.managerName, response.employeeID, response.man_email_addr, response.officeNum);
        Employees.push(manager);
        
    })
}

function addMember(){
    inquirer.prompt([{
        type: "input",
        message: "Enter the new member's name: ",
        name: "name"
    },
    {
        type: "list",
        message: "Pick new member's role:",
        name: "role"
    },
    {

    }])
}
