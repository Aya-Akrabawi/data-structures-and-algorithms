'use strict';

const List = require('../../linkedList/linked-list')
const Node = require('../../linkedList/node');


function zipLists(list1, list2) {
    let cur1 = list1.head;
    let cur2 = list2.head;
    let ll = new List(new Node(cur1.value));
    cur1 = cur1.next;
    let count = 0;
    while (cur1 || cur2) {
        if (count % 2 === 0 && cur2) {
            ll.append(new Node(cur2.value))
            cur2 = cur2.next;
        }
        if (count % 2 === 1 && cur1) {
            ll.append(new Node(cur1.value))
            cur1 = cur1.next;
        }
        count++;
    }
    return ll.toString();
}

const ll1 = new List();
ll1.insert(4);
ll1.insert(5);
ll1.insert(6);
const ll2 = new List();
ll2.insert(70);
ll2.insert(80);
ll2.insert(90);

console.log('hhhhhhhhhhh',zipLists(ll1,ll2));

module.exports = zipLists;