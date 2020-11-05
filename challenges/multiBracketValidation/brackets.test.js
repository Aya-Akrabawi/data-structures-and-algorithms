'use strict';

const multiBracketValidation = require('./multi-bracket-validation');


describe('testing', () => {


  it(' return true when balanced ', () => {


    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();

  });

  it(' return false when balanced ', () => {


    expect(multiBracketValidation('{(}]')).toBeFalsy();

  });


});