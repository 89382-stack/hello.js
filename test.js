function sumOfMultiples(p, q) {
    let sum = 0;

    for (let x of p) {
        for (let y of q) {
            if (x !== 0 && x % y === 0) {
                sum += x;
                break; 
            }
        }
    }

    return sum;
}

const f = [2,3];
const m=[3,4,5,6,7,8,9,10];
console.log(sumOfMultiples(f,m));