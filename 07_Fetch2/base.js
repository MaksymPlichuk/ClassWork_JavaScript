document.addEventListener("DOMContentLoaded", () => {
    let imgDog = document.getElementById('dogPhoto');
    imgDog.hidden = true;

    fetchImage();
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

    // let response = await fetch(url);
    // let json = await response.json();

    // imgDog.src = json.message;
    // console.log(json);
};
