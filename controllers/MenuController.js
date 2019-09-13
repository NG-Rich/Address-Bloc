const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor () {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get time and date",
          "Exit"
        ]
      }
    ];
    this.contacts = [];

  }

  main() {
    console.log('Welcome to AddressBloc!');
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch (response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
          break;
        case "Get time and date":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        default:
          console.log('Invalid input');
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear() {
    console.log('\x1Bc');
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate() {
    this.clear();
    console.log('The current time and date is: ' + Date());
    this.main();
  }

  exit() {
    console.log('Thank you for using AddressBloc!');
    process.exit();
  }

};
