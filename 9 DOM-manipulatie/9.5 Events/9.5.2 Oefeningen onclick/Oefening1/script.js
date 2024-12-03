function changeText() {
    let button = document.querySelector("#subscribe-button");
    if(button.innerHTML == 'Subscribe') {
        button.innerHTML = "Subscribed";
        button.style.backgroundColor = "grey";
    } else {
        button.innerHTML = "Subscribe";
        button.style.backgroundColor = "black";
    }
    
}