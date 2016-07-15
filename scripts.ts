function min(values: Array<number>): number {
    // Loop through the values array
    // for every value, check if it is less than the established minimum
    // if it is, then this value becomes the new established minimum
    let minimum = values[0];
    for (let i = 0; i < values.length; i++) {
         let currentValue = values[i];
         if (currentValue < minimum) {
             minimum = currentValue;
         }
    }
    return minimum;
}

function max(values: Array<number>): number {
    let maximum = values[0];
    for (let i = 0; i < values.length; i++) {
        let currentValue = values[i];
        if (currentValue > maximum) {
            maximum = currentValue;
        }
    }
    return maximum;
}

function mean(values: Array<number>): number {
    // The mean is the average of all numbers in the array.
    // It can be found by summing all the numbers, and dividing by the number of numbers in the data set
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        let currentValue = values[i];
        sum += currentValue;
    }
    let mean = sum / values.length;
    return mean;
}

function median(values: Array<number>): number {
    // You need to sort the values array to be lowest to highest
    // If there is an even number of values, the median should be the average of the "middle" numbers
    // If there is an odd number of values, the median is the "center" value.
    // ex: [1,2,3] => median is 2
    // ex: [1,2] => media is 1.5
    let sorted = values.sort((a,b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
        // return a - b;
    });

    let median: number;
    if (sorted.length % 2 === 0) {
        // even length
        let val1 = sorted[sorted.length / 2];
        let val2 = sorted[sorted.length / 2 - 1];
        median = mean[val1, val2];
    } else {
        // odd length
        let centerIndex = (Math.floor(sorted.length / 2));
        return centerIndex;
    }
}

function mode(values: Array<number>): number {
    //You will probably want to sort the array from lowest to highest.
    //The mode is the most repeated number
    //If there are numbers repeated the same amount, you may choose the last number
    // ex: [1,2,2,3] => mode is 2
    // ex: [1,2,2,3,3] => mode is 3
    // If you can figure it out, return null if there is not a real mode. 
    let sorted = values.sort((a,b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });

    let currentCount = 1;
    let currentNumber = sorted[0];
    let modeCount = 0;
    let mode: number = null;

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === currentNumber) {
            currentCount++;
        } else {
            if (currentCount >= modeCount) {
                modeCount = currentCount;
                mode = currentNumber;
            }
            currentNumber = sorted[i];
            currentCount = 1;
        }
    }

    return mode;
}

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function decode(values: Array<number>): string {
    // DO NOT SORT
    // Takes an array of numbers, iterates through the numbers
    // should build a string from the numbers and return it
    // Ex: [4,1,22,9,4] => DAVID
    let message = '';
    for (let i = 0; i < values.length; i++) {
        let target = values[i] - 1;
        if (target > -1 && target < 26) {
            let letter = alphabet[target];
            message += letter;
        }    
    }
    return message;
}

function encode(secret: string): Array<number> {
    // Takes a secret string as a parameter
    // Iterates through the string
    // Should return a number array with the corresponding position in the same order
    // Ex: DAVID => [4,1,22,9,4]
    let encryption: Array<number> = [];
    for (let i = 0; i < secret.length; i++) {
        for (let z = 0; z < alphabet.length; z++) {
            let target = alphabet.indexOf(secret.charAt(i));
            if (target > -1) {
                encryption.push(target + 1);
            }
        }
    } 
    return encryption;
}

let data = [15, -12, 25, 32, 4, 7, 6];
let data2 = [15, -12, 25, 32, 4, 7, -12, 6];
let data3 = [15, -12, 25, 32, 25, 4, 7, -12, 6];
let result = min(data);
console.log(result);

result = max(data);
console.log(result);

result = mean(data);
console.log(result);

console.log(median(data));
console.log(median(data2));
console.log(median(data3));
console.log(decode([4,1,22,9,4]));

