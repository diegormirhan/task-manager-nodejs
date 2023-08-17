// Tests

const benchmark = require('benchmark');
const suite = new benchmark.Suite;

function testArrowFunction() {
    for (let i = 0; i < 1000000000; i++) {
        let test = () => {}
        test()
    }
}

function testNormalFunction() {
    for (let i = 0; i < 1000000000; i++) {
        let test = function () {}
        test()
    }
}

suite
    .add('Arrow Function', () => {
        testArrowFunction();
    })
    .add('Normal Function', () => {
        testNormalFunction();
    })
    .on('cycle', event => {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });




