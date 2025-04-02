const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro){
    let valueInYen = valueInEuro * (156.5/1.07);
    return valueInYen
}

const fromYenToPound = function(valueInEuro){
    let valueInPound = valueInEuro * (0.87/1.07)
    return valueInPound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }