/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let maxValue = -Infinity;

    strs.forEach(str => {
        if (/^\d+$/.test(str)) {
            const value = parseInt(str, 10);
            maxValue = Math.max(maxValue, value);
        } else {
            const value = str.length;
            maxValue = Math.max(maxValue, value);
        }
    });

    return maxValue;
}