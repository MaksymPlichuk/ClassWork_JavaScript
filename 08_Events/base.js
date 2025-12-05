document.addEventListener('DOMContentLoaded', () => {
    menuShowHTML();

    // let body = document.body;
    // body.addEventListener('mousemove', showpos);

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
function menuShowHTML(){
    let menuInfoBox = document.getElementById('menuInfo');
    menuInfoBox.innerHTML = `Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.\n
    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.`;
}
function menuShowCSS(){
    let menuInfoBox = document.getElementById('menuInfo');
    menuInfoBox.innerHTML = `Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).\n CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications`;
}
function menuShowJS(){
    let menuInfoBox = document.getElementById('menuInfo');
    menuInfoBox.innerHTML = `JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static \ninformation for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.`;
}

function delete1p() {
    firstPara = document.getElementById('firstParag')
    firstPara.remove();
}
function delete2p() {
    secondPara = document.getElementById('secondParag')
    secondPara.remove();
}
function delete3p() {
    thirdPara = document.getElementById('thirdParag')
    thirdPara.remove();
}

let activeColor = "lightsalmon"
let baseColor = "lightpink"
let activeElem = null;

function paraClick(event) {
    if (activeElem) {
        activeElem.style.backgroundColor = baseColor;
    }
    activeElem = event.target;
    activeElem.style.backgroundColor = activeColor
}

//part2

function generateNum() {
    let num = document.getElementById('number')
    num.innerHTML = Math.floor(Math.random() * 10000);
}

// function showpos(event) {
//     console.log(event);
// }
