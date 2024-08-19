/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let j = i + 1;
        while (j < n && nums[i] + nums[j] < target) {
            count++;
            j++;
        }
    }

    return count;
};