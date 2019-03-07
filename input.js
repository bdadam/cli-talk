#!/usr/bin/env node

const inquirer = require('inquirer');

inquirer
    .prompt([
        { type: 'input', name: 'username', message: 'Username' },
        { type: 'password', name: 'password', message: 'Password' },
        {
            type: 'list',
            name: 'role',
            message: 'Role',
            choices: ['AdminAccess', 'PowerUserAccess', 'ReadOnlyAccess'],
            default: 'ReadOnlyAccess',
        },
        {
            type: 'checkbox',
            name: 'lang',
            message: 'Programming language',
            choices: ['JS', 'TS', 'C#', 'Rust', 'Python', 'Go'],
        },
    ])
    .then(answers => {
        console.log(answers);
    });
