/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let sum = Infinity;
    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let currentsum = nums[i] + nums[left] + nums[right];
            if (currentsum === target) {
                return currentsum ;
            }
            if (Math.abs(currentsum - target) < Math.abs(sum - target)) {
                sum = currentsum;
            }
            if (currentsum < target) {
                left++;
            } else {
                right--;
            }

        }

    }
    return sum;
};