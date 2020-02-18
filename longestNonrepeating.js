// given a string of characters 'aiwevbbbzddeees'
// return the length of the longest string with non repeating characters: 6
const solution = (s) => {
    let longestString = '', maxLength = 0;
    s.split('').forEach(char => {
        const tempIndex = longestString.indexOf(char);
        longestString = longestString.substring(tempIndex+1) + char;
        maxLength = longestString.length > maxLength ? longestString : maxLength;
    });
    
    return maxLength;
};