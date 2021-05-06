
const chalk = require('chalk');
const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/users";
axios
.get(url)
.then(respose => console.log(chalk.bgRed(respose.data[0].email)));
