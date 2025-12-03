document.addEventListener('DOMContentLoaded', () => {

})

const light1 = document.getElementById("light1")
const light2 = document.getElementById("light2")
const light3 = document.getElementById("light3")
light1.style.backgroundColor='red';
let currentLight = light1;

function nextColor(){
    if(currentLight == light1){
        light1.style.backgroundColor = 'black';
        light2.style.backgroundColor = 'yellow';
        currentLight = light2;
        return;
    }
    else if(currentLight == light2){
        light2.style.backgroundColor = 'black';
        light3.style.backgroundColor = 'green';
        currentLight = light3;
        return;
    }
    else if(currentLight == light3){
        light3.style.backgroundColor = 'black';
        light1.style.backgroundColor = 'red';
        currentLight = light1;
        return;
    }
}