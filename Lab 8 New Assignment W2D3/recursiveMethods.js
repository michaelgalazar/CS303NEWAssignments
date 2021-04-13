"use strict";
/* eslint-disable */

/** Question 1: Sum all numbers till the given one */

function sumUpto(number) {
    if (number === 0) {
        return 0;
    } else {
        return number + sumUpto(number - 1); // number + number-1 + number-2 + number -2 + 
    }
}

console.log(sumUpto(9));

/** Question 2: - use recursion to implement print() method
                -Use Object literal to create an object named linkedlist which has the following methods:
                 */

let linkedList = {
    head: null,
    createNode: function (newItem) {
        return {
            data: newItem,
            next: null
        };
    },
    add: function (item) {
        let current,
            newNode = this.createNode(item);
        if (this.head === null) {
            this.head = newNode;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    },
    remove: function (existingItem) {
        if (this.head.data === existingItem) {
            this.head = this.head.next;
            return;
        }
        let previous = this.head;
        let current = this.head.next;
        while (current.data !== null) {
            if (current.data === existingItem) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }

    },
    print: function () {
        let list = "";
        let curr = this.head;
        if (curr.data === null) {
            return null;
        }
        return function printRecursively () {
            if (curr.next === null) {
                return list + curr.data;
            }
            list += curr.data + ", ";
            curr = curr.next;
            return printRecursively();
        };
    }
};
// print: function () {
//     let list = "";
//     let curr = this.head;
//     while ( curr.next !== null ) {
//         list = list + curr.data + ",";
//         curr = curr.next; 
//     }
//     list = list + curr.data;
//     return list;
// }

linkedList.add(1);
linkedList.add(2);
linkedList.add(5);
linkedList.add(7);
linkedList.add(9);
linkedList.remove(2);
linkedList.add(11);
linkedList.remove(7);
let p = linkedList.print();
console.log(linkedList);
//console.log("Linkedlist {",linkedList.print(), "}");
console.log("Linkedlist {",p(), "}");

///////////////////////////////////////////////////////////
// console.log("11111");
// setTimeout(() => console.log("222222"), 0);
// console.log("3333333");
// setTimeout(() => console.log("5555555"), 0);
