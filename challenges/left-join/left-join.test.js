'use strict';
// const util = require('util');

const Hashtable = require('./hashtabl');
const leftJoin = require('./left-join');

function testExample() {
  let myHashA = new Hashtable(4000);
  let myHashB = new Hashtable(4000);
  
  myHashA.add('Data', 123);
  myHashA.add('Data1', 321);
  myHashA.add('Data2', '45456');
  myHashA.add('Data2', 'Dtaum');
  myHashA.add('Data3', 'Rando');
  myHashA.add('Data4', 999);
  myHashA.add('Data5', 'whoseesdeadpeople');
  
  myHashB.add('Data', 123);
  myHashB.add('Data3', 'Rando');
  myHashB.add('Data4', 333);
  myHashB.add('Data6', 404);

  return [myHashA, myHashB];
}

describe('Left joins works as intended', ()=> {
  it('make full left join, and Data5 to only have 1 entry', ()=> {
    let [myHashA, myHashB] = testExample();
    leftJoin(myHashA, myHashB);
    // console.log(util.inspect(myHashA.entries[myHashA.hash('Data5')], false, null, true /* enable colors */))
    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('make full left join, and Data5 to have a correct entry value', ()=> {
    let [myHashA, myHashB] = testExample();
    leftJoin(myHashA, myHashB);

    expect(myHashA.entries[myHashA.hash('Data5')].head.value['Data5']).toEqual('whoseesdeadpeople');
  });

  it('make full left join, and appends what exists in B to A', ()=> {
    let [myHashA, myHashB] = testExample();
    leftJoin(myHashA, myHashB);

    expect(myHashA.entries[myHashA.hash('Data')].size).toEqual(2);
  });

  it('make full left join, leaves unique B outside of A', ()=> {
    let [myHashA, myHashB] = testExample();
    leftJoin(myHashA, myHashB);
    
    expect(myHashA.entries[myHashA.hash('Data6')]).toBeFalsy;
  });

});