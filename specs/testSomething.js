var assert = require('assert');
var Something = require('../something.js');

var something = new Something();

describe('Something', function(){
    it('should do something', function(){
        assert.strictEqual(something.someFunction(), 'something');
    });
});