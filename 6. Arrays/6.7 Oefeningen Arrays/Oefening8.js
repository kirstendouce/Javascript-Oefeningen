let arr = [1, 2, 3, 4, 5, 6];
console.log(telDeElementen(...arr));

function telDeElementen(...arr) {
    let som = 0;
    for (let number of arr) {
        som += number;
    }
    return som;
}