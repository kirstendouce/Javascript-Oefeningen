let count = 0;
let counter = document.querySelector('#counter');
function countUp() {
    count++;
    updateCount();
}
function countDown() {
    count--;
    updateCount();
}
function countReset() {
    count = 0;
    updateCount();
}
function updateCount() {
    counter.innerHTML = count;
}