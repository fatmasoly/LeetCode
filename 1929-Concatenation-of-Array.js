/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [...nums];
    let n = nums.length;
    for (i = 0; i < n; i++) {
        ans[i + n] = nums[i];
    }
    return ans;
};