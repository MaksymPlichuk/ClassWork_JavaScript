let cards = document.getElementById("cards")

function formSubmit(event) {
    event.preventDefault();

    let form = event.target;

    let formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    console.log(values)
    const date = new Date()

    cards.innerHTML += `<div id="cards" style="background-color: bisque;">
            <div class="text-center mt-5 mainCard">
                <div class="header">
                    <h5 style="margin-left: 20px;">Name: <b>${values.name}</b></h5>
                    <h5>Date: <b>${date}</b></h5>
                </div>
                <div>
                    <p style="text-wrap: initial;">${values.message}</p>
                </div>

            </div>
        </div>`
}

function loginFormSubmit(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let values = Object.fromEntries(formData.entries());

    if (values.pass == values.repPass)
        alert(`The verify mail was send on ${values.email}`)
    else alert(`Passwords don't match!`)
}

let colors = document.getElementById("colors")

function colorFormSubmit(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let values = Object.fromEntries(formData.entries());

    colors.innerHTML += `<div class="colorInfo">
                <div class="box" style="background-color: rgb(${values.r},${values.g},${values.b});"></div>
                <div>
                    <p class="colorText">RGB(${values.r},${values.g},${values.b})</p>
                </div>
            </div>`
}