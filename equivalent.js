// Given two arrays of numbers, write a function called equivalent() that returns true
// if both arrays contain the same numbers, but not necessarily in the same order.
// For example, [1, 3, 4, 2, 5] and [1, 2, 3, 5, 4] are equivalent.

function equivalent(array1, array2) {
    if (!array1 || !array2 || !array1.isArray() || !array2.isArray()) { return false; }
    if (array1.length != array2.length) { return false; }
    
    array1.sort();
    array2.sort();
    
    var len = array1.length - 1;
    for (; len >= 0; len--) {
        if (array1[len] !== array2[len]) return false;
    }
    
    return true;
}

equivalent(null, [1]);
equivalent(undefined, undefined);
equivalent(null, null);
equivalent(null, undefined);

equivalent([],[]);
equivalent([1], [1,3,4]);
equivalent([3,5,2], [4,3,1]);
equivalent([2,5,9], [9,5,2]);

// python version to use a dictionary
// def equivalent (array1, array2) :
//     if (not array1 or not array2 or len(array1) != len(array2)
//        not isinstance(array1, list) or not isinstance(array2, list)) : return False
//     adict = {}
//     for num in array1 : 
//         if adict[num] : adict[num] += 1
//         else : adict[num] = 1
//     for num in array2 :
//         if adict[num] : 
//             if adict[num] == 0 : return false
//             else : adict[num] -= 1
//         else : return false
//     return true

// adict = { 1:1 } adict[1] = 1, adict[1] = 0
// adict = {2:1, 3:1 }, adict[3] == 1, adict[3] = 0, adict[2] == 1, adict[2] = 0