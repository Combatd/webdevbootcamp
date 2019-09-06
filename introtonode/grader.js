function average(arr) {
    let total = 0; // accumulator
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; // add to accumulator
    }
    let avg = (total / arr.length).toFixed(0); 
    return avg; // return the whole average
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log(average(scores)); // should return 94
console.log(average(scores2)); // should return 68