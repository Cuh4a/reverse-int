module.exports = function reverse(n) {
    let b = Math.abs(n);
    let array = ("" + b).split("").map(Number);
    array.reverse();
    const singleNumber = Number(array.join(''));
    return singleNumber;
}
