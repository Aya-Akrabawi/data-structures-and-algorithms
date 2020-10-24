# Stacks and Queues
<!-- Short summary or background information -->

## Challenge
create and practice onStacks and Queues

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

** for Staks:
* method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
* method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

** for Queue: 

* method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Should raise exception when called on empty queue
* method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
Should raise exception when called on empty queue
* method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.