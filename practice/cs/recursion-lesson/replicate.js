/* function replicate(repeat, number) {
    let array = [];
    if (repeat <= 0) {
        return [];
    }
    for (i = 0; i < repeat; i++) {
        array.push(number);
    }
    return array;
} */ 
// correct solution:
function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []