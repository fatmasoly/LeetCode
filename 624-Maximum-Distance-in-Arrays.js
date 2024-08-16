/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    m = arrays.length;
    let minVal = arrays[0][0];
    let maxVal = arrays[0][arrays[0].length - 1];
    let maxDist = 0;

    for (let i = 1; i < m; i++) {
        const currArray = arrays[i];
        maxDist = Math.max(
            maxDist, 
            Math.abs(currArray[currArray.length - 1] - minVal),
            Math.abs(maxVal - currArray[0])
        );

        minVal = Math.min(minVal, currArray[0]);
        maxVal = Math.max(maxVal, currArray[currArray.length - 1]);
    }

    return maxDist;
};