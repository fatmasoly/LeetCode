/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    uglyNums = new Array(n);
    uglyNums[0] = 1;
    let idx2 = 0;
    let idx3 = 0;
    let idx5 = 0;

    let nextOf2 = 2;
    let nextOf3 = 3;
    let nextOf5 = 5;
    
        for (let i = 1; i < n; i++) {
        let nextUglyNumber = Math.min(nextOf2, nextOf3, nextOf5);
        uglyNums[i] = nextUglyNumber;

        if (nextUglyNumber === nextOf2) {
            idx2++;
            nextOf2 = uglyNums[idx2] * 2;
        }
        if (nextUglyNumber === nextOf3) {
            idx3++;
            nextOf3 = uglyNums[idx3] * 3;
        }
        if (nextUglyNumber === nextOf5) {
            idx5++;
            nextOf5 = uglyNums[idx5] * 5;
        }
    }

    return uglyNums[n - 1];
};
