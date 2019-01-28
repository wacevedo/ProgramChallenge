// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
    let result = 0;
    for (let index = 1; index <= num; index++) {
        result += index;
    }
    return result;
}

console.log(SimpleAdding(4));
