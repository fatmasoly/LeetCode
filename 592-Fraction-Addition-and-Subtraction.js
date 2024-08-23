/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    const lcm = (a, b) => (a * b) / gcd(a, b);
    
    const parseFraction = (s) => {
        const [numerator, denominator] = s.split('/').map(Number);
        return { numerator, denominator };
    };

    const addFractions = (f1, f2) => {
        const commonDenominator = lcm(f1.denominator, f2.denominator);
        const newNumerator1 = f1.numerator * (commonDenominator / f1.denominator);
        const newNumerator2 = f2.numerator * (commonDenominator / f2.denominator);
        return {
            numerator: newNumerator1 + newNumerator2,
            denominator: commonDenominator
        };
    };

    const subtractFractions = (f1, f2) => {
        const commonDenominator = lcm(f1.denominator, f2.denominator);
        const newNumerator1 = f1.numerator * (commonDenominator / f1.denominator);
        const newNumerator2 = f2.numerator * (commonDenominator / f2.denominator);
        return {
            numerator: newNumerator1 - newNumerator2,
            denominator: commonDenominator
        };
    };

    const simplifyFraction = (fraction) => {
        const commonDivisor = gcd(Math.abs(fraction.numerator), fraction.denominator);
        return {
            numerator: fraction.numerator / commonDivisor,
            denominator: fraction.denominator / commonDivisor
        };
    };

    let result = { numerator: 0, denominator: 1 };

    let i = 0;
    while (i < expression.length) {
        let sign = 1;
        if (expression[i] === '-') {
            sign = -1;
            i++;
        } else if (expression[i] === '+') {
            i++;
        }
        
        let j = i;
        while (j < expression.length && expression[j] !== '+' && expression[j] !== '-') {
            j++;
        }
        
        const fractionString = expression.substring(i, j);
        const { numerator, denominator } = parseFraction(fractionString);
        const fraction = { numerator: sign * numerator, denominator };

        result = addFractions(result, fraction);

        i = j;
    }

    result = simplifyFraction(result);

    if (result.denominator === 1) {
        return `${result.numerator}/1`;
    }
    
    return `${result.numerator}/${result.denominator}`;
};
