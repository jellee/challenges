// given binary tree with nodes listed out in breadth first search order
// return Left if the sum of the nodes in the left branch are larger, and Right vice versa
// return empty string if empty or equal

const solution = (arr) => {
    let level = 1, left = 0, right = 0, currIndex = 1;
    while (currIndex < arr.length) {
        const numVals = Math.pow(2, level);
        let indexPlus = numVals / 2;
        while (indexPlus > 0) {
            left += arr[currIndex + indexPlus - 1] || 0;
            right += arr[currIndex + indexPlus] || 0;
            indexPlus--;
        }`
        currIndex += numVals;
        level++;
    }
    
    return left > right ? 'Left' : (right > left ? 'Right' : '');
};