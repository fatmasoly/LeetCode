/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const output = [];
    function backtrack(start, target, path) {
        if (target === 0) {
            output.push([...path]);
            return;
        }
        if (target < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], path);
            path.pop();
        }
    }

    candidates.sort((a, b) => a - b);
    backtrack(0, target, []);
    return output;
}
