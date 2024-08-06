/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let n = hours.length
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (hours[i] >= target)
        count++;
    }
    return count;
};