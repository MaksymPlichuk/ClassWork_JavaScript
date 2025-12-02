document.addEventListener("DOMContentLoaded", () => {
    let imgDog = document.getElementById('dogPhoto');
    imgDog.hidden = true;

    fetchImage();
    fetchDogBreeds();
})

function fetchImage() {
    const url = "https://dog.ceo/api/breeds/image/random";

    let imgDog = document.getElementById('dogPhoto');
    imgDog.hidden = false;

    fetch(url)
        .then(result => result.json())
        .then(data => {
            imgDog.src = data.message;
        });
};


function fetchDogBreeds() {
    //const url = "https://dog.ceo/api/breed/{airedale}/images/random"
    const url = "https://dog.ceo/api/breeds/list/all"

    const table = document.getElementById('breedTable')

    fetch(url).then(result => result.json()).then(data => {
        for (const breed of Object.keys(data.message)) {
            table.innerHTML += `<tr>
                        <th scope="row">${breed}</th>
                        <td scope="row">${data.message[breed]}</td>
                     </tr>`
        }
    }).catch(error => console.error(error));
}


function getText() {
    const text = document.getElementById('inputTip');
    console.log(text.value);

    fetchAdviceByKeyword(text.value)
}

function fetchAdviceByKeyword(keyword) {
    //let word = prompt("Enter Word For Advice");
    const url = `https://api.adviceslip.com/advice/search/${keyword}`;


    fetch(url).then(response => response.json()).then(data => {
        const tipBox = document.getElementById('tipBox');

        if (data.slips) {
            tipBox.innerText = `${data.slips[0].advice} [${data.slips[0].date}]`;
        }
        else { tipBox.innerText = data.message.text };
        console.log(data.message.text)

    }).catch(error => console.error(error));


}


