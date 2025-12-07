document.addEventListener('DOMContentLoaded',()=>{
    images.src = imgArr[currentImgIndex]
})

function increaseNum(){
    let num = document.getElementById('number')
    let val = num.innerText;
    val++;
    num.innerText = val;
}
function decreaseNum(){
    let num = document.getElementById('number')
    let val = num.innerText;
    val--;
    num.innerText = val;
}

let currentImgIndex = 1
let images = document.getElementById('libraryImg')
let imgArr = ['https://static.wikia.nocookie.net/villains/images/7/7b/Tylerbetterpicture.jpg','https://i.pinimg.com/736x/f2/bf/03/f2bf03e90b992ee844f6dd0f32b82546.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOfsGSXf46P0QLD8faduGNKkNJ_ozF4gqVQ&s','https://ichef.bbci.co.uk/images/ic/480xn/p07h2zhs.jpg.webp','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0iVNsF5jEfVfGFqGaa6lDvB5D77UIr-GMQ&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQTOH0Xi7a-w9sYtyAW7LcjBY1GX-jSjtaw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_v2u83oA1QyLtDn2Y1G_5aR4BngAxRUgC8w&s','https://yt3.googleusercontent.com/ytc/AIdro_mxX8Srq2DVw-asfvgs0cXVyOOWUgXskAXn7otWaG-cdA=s900-c-k-c0x00ffffff-no-rj']

function leftImg(){
    if(currentImgIndex === 0){
        alert("you can't go further")
    }
    else{
        currentImgIndex--;
        images.src = imgArr[currentImgIndex]
    }
}
function rigthImg(){
    if(currentImgIndex === imgArr.length-1){
        alert("you can't go further")
    }
    else{
        currentImgIndex++;
        images.src = imgArr[currentImgIndex]
    }
}

const textWithColor = document.getElementById("textToChangeColor")
function changeColorByClick(event){
    let box = event.target;
    let color = box.style.backgroundColor;
    textWithColor.style.color = color;
}


