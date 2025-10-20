function fibs(number) {
    if (number <= 0) {
        return []
    } else if (number === 1) {
        return [0]
    } else {
        let array = [0, 1];
        for (i = 1; i < number; i++) {
            array.push(array[array.length - 1] + array[array.length - 2])
        }
        return array;
    }
}

function fibsRec(number) {
    if (number <= 0) return [0];
    else if (number === 2) return [0, 1]
    let array = fibsRec(number - 1);
    array.push(array[array.length - 1] + array[array.length - 2])
    return array;
}

console.log(fibs(8))
console.log(fibsRec(8));


/* 
    how merge sort works, so i dont forget:

    It takes an array, splits in half, half, half, until only 1 value remains for each half.
    it sorts that half to the other half and merges them.
    up until the original length, with the array sorted.

    Base case:
    the array halves lengths are one.
*/

function mergeSort(array) {
    if (array.length === 1) {
        return []
    }
    
}