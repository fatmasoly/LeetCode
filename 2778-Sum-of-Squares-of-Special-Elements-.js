/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    const n = nums.length;
    let sqrSum = 0;
    for (i = 0; i < n; i++) {
        if (n % (i + 1) == 0) {
            sqrSum += (nums[i] * nums[i]);
            
        }
    }
    return sqrSum;
};