const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("One dollar should be  146.26168224299064 yen", function(){
    const {fromDollarToYen}= require('./app.js');
    const yens= fromDollarToYen(1);
    const expected = 1 * (156.5/1.07);
    expect(fromDollarToYen(1)).toBe( 146.26168224299064);
});

test("One yen should be 0.8130841121495327 pound", function(){
    const {fromYenToPound}= require('./app.js');
    const pounds = fromYenToPound(1);
    const expected = 1 *(0.87/1.07);
    expect(fromYenToPound(1)).toBe(0.8130841121495327);
});