'use strict';

const {Stack} = require('./stacks-and-queues');


describe('Stack tests', () => {
  it('Can instantiate a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });
  it('Can check if a stack is empty or not', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('Can push into the stack', () => {
    const stack = new Stack();
    stack.push(45);
    expect(stack.top.value).toBe(45);
  });
  it('Can add more than node onto stack', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.top.value).toBe(1);
    expect(stack.top.next.value).toBe(2);
    expect(stack.top.next.next.value).toBe(3);
  });
  it('Can pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    stack.pop();
    expect(stack.top.value).toBe(2);
  });

  it('Can peek the next item on the stack.', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });
});

