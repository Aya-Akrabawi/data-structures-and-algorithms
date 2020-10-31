'use strict'
const {Queue} = require('./stacks-and-queues');

describe('Queue tests', () => {
    it('Can instantiate a queue', () => {
      const queue = new Queue();
      expect(queue).toBeDefined();
    });
    it('Can check if a queue is empty or not', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBeTruthy();
      queue.enqueue(22);
      expect(queue.isEmpty()).toBeFalsy();
    });
    // it('Can enqueue onto a queue', () => {
    //   const queue = new Queue();
    //   queue.enqueue(1);
    //   expect(queue.front.value).toBe(1);
    // });
  
    // it('Can dequeue off of a queue the expected value', () => {
    //   const queue = new Queue();
    //   queue.enqueue(1);
    //   expect(queue.front.value).toBe(1);
    //   queue.enqueue(2);
    //   expect(queue.front.next.value).toBe(2);
    //   expect(queue.front.value).toBe(1);
    //   queue.dequeue();
    //   expect(queue.front.value).toBe(2);
    // });
    // it('Can peek into a queue, seeing the expected value', () => {
    //   const queue = new Queue();
    //   queue.enqueue(1);
    //   expect(queue.front.value).toBe(1);
    //   expect(queue.peek()).toBe(1);
    //   queue.enqueue(2);
    //   expect(queue.front.next.value).toBe(2);
    //   expect(queue.peek()).toBe(1);
    //   queue.enqueue(3);
    //   expect(queue.front.next.next.value).toBe(3);
    //   expect(queue.peek()).toBe(1);
    //   expect(queue.peek()).toBe(1);
    // });
  
  });