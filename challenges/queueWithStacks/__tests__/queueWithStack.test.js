const PseudoQueue = require('../queue-with-stacks');
const  Node = require('../linked-lists');

describe('Queue Linear LinkedList DS class-010', ()=> {
    

    it('enqueue multiple values into a queue', ()=> {
        const queue = new PseudoQueue();
        const value1 = 1;
        const value2 = 2;
        const value3 = 3;
  
        queue.enqueue(value1);
        queue.enqueue(value2);
        queue.enqueue(value3);
        expect([queue.Stack_1.top.next.next.value, queue.Stack_1.top.next.value, queue.Stack_1.top.value]).toEqual([1,2,3]);
    });
    it('dequeue the first value', ()=> {
        let queue = new PseudoQueue();
         const value1 = 1;
        const value2 = 2;
        const value3 = 3;
  
        queue.enqueue(value1);
        queue.enqueue(value2);
        queue.enqueue(value3);
        expect(queue.dequeue()).toEqual(value1);
    });
  
    it('Empty case: ', ()=> {
      const queue = new PseudoQueue();
      expect(queue.dequeue()).toEqual('Empty Stack!');
    });
  });

//    {"Stack_1": {"top": {"next": {"next": {"next": null, "value": 1}, "value": 2}, "value": 3}}, "Stack_2": {"top": null}}