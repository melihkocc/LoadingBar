const counter = document.querySelector("#counter")
const bar = document.querySelector(".bar")

let number=0;
function update(){
    counter.textContent = `${number}%`
    bar.style.width = `${number}%`;
    number++
    if(number<101){
        setTimeout(update,70)
    }
}
update();


