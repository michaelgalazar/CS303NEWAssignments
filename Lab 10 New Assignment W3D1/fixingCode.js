"use strict";
let prompt = require("prompt-sync")();
/* eslint-disable */
/** Question 1: Fix a function that loses “this” (do with bind, wrapper, call, and apply)
 * with bind
*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    loginOk() {
        console.log(this.name, " logged in."); //alert(`${this.name} logged in`);
    },
    loginFail() {
        console.log(this.name, " failed to login.");//alert(`${this.name} failed to log in`);
    }
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/**
 * with call / apply built in methods
 */

function askPassword() {
    let password = prompt("Password?", '');
    if (password === "rockstar") user1.loginOk.call(user1);
    else user1.loginFail.call(user1);
}

let user1 = {
    name: 'John',
    loginOk() {
        console.log(this.name, " logged in."); //alert(`${this.name} logged in`);
    },
    loginFail() {
        console.log(this.name, " failed to login.");//alert(`${this.name} failed to log in`);
    }
};
askPassword();

/** with wrapper */

function askPassword() {
    let password = prompt("Password?", '');
    if (password === "rockstar") user2.loginOk();
    else user2.loginFail();
}

let user2 = {
    name: 'John',
    loginOk() {
        console.log(this.name, "logged in.");//alert(`${this.name} logged in`);
    },
    loginFail() {
        console.log(this.name, "failed to login.");//alert(`${this.name} failed to log in`);
    }
};
askPassword();

/** Question 2: Partial application for login (do with bind, wrapper, call, and apply) */

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") ok();
    else fail();
}

let user3 = {
    name: 'John',
    login(result) {
        console.log(this.name, result); //alert(`${this.name} logged in`);
    }
};
askPassword(function () { user3.login(true) }, function () { user3.login(false) });

/** Question 3: Fix the code below using bind */

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();