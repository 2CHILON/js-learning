//
function isEven(n) {
    return n % 2 === 0;
}

//loop from 1 to 20 and print which numbers are even
for (let i = 1; i <= 20; i++) {
    if (isEven(i)) {
        console.log(i + "is even");
    }
}