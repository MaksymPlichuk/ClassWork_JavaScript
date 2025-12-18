document.addEventListener("DOMContentLoaded", () => {
    const colors = getColorCookies();
    if (colors.length > 1) colors.forEach(renderColor);
    else {
        let color = createColorObject("Red", "rgb", "255,0,0");
        setCookieBy3Hours("colors", JSON.stringify([color]));
        renderColor(color);
    }

});


let boxList = document.getElementById("boxList")


function createColorObject(name, type, code) {
    return {
        name: name.trim(),
        type: type,
        code: code.trim()
    }
}


function getColorCookies() {
    const cookies = document.cookie.split("; ")

    for (const val of cookies) {
        let data = val.split("=");

        if (data[0] === "colors") {
            try {
                console.log(data[1])
                return JSON.parse(data[1]);
            } catch {
                return [];
            }
        }
    }
    return [];
}


function setCookieBy3Hours(name, val) {
    let date = new Date();
    date.setHours(date.getHours() + 3);
    document.cookie = `${name}=${val};path=/;expires=${date.toUTCString()}`;
}


function addCookieColor(color) {
    const colors = getColorCookies();
    colors.push(color);
    setCookieBy3Hours("colors", JSON.stringify(colors))
}



function deleteCookie() {
    document.cookie = `colors=;path=/;expires=Thu, 1 January 1970 00:00:00 GMT`;
    boxList.innerHTML = ``;
}



function validateName(nameToVerify) {
    const regex = /^[a-zA-Z]+$/

    const match = nameToVerify.match(regex);
    if (!match) {
        alert(`Name must only contain letters!`);
        return false;
    }

    const colors = getColorCookies();

    for (let i = 0; i < colors.length; i++) {
        const existingName = colors[i].name;

        if (existingName.toLowerCase() === nameToVerify.toLowerCase()) {
            alert(`Name ${nameToVerify} is not unique!`);
            return false;
        }
    }

    return true;
}


function validateRGB(code) {
    const parts = code.split(",");
    if (parts.length != 3) {
        alert("Input must be: [255,255,255]");
        return false;
    }

    for (let i = 0; i < parts.length; i++) {
        const num = Number(parts[i]);
        if (isNaN(num) || num < 0 || num > 255) {
            alert("Numbers must be: > 0 and < 255");
            return false;
        }
    }
    return true;
}

function validateRGBA(code) {
    const parts = code.split(",");
    if (parts.length != 4) {
        alert("Input must be: [255,255,255,1]");
        return false;
    }

    for (let i = 0; i < parts.length; i++) {
        const num = Number(parts[i]);

        if (isNaN(num)) {
            alert("Input must be only numbers!");
            return false;
        }

        if (i < 3) {
            if (num < 0 || num > 255) {
                alert("Numbers must be: > 0 and < 255");
                return false;
            }
        } else {
            if (num < 0 || num > 1) {
                alert("Alpha channel must be: > 0 and < 1");
                return false;
            }
        }
    }
    return true;
}

function validateHEX(code) {
    const regex = /^#[0-9A-Fa-f]{6}$/;
    const match = code.match(regex);
    if (!match) {
        alert("Hex format must contain 6 symbols: numbers 1-9 and letters a-f");
        return false;
    }
    return true;
}


function renderColor(color) {
    const box = document.createElement("div");
    box.className = "box";

    let cssColor = "";
    if (color.type === "rgb") cssColor = `rgb(${color.code})`;
    if (color.type === "rgba") cssColor = `rgba(${color.code})`;
    if (color.type === "hex") cssColor = color.code;

    box.style.backgroundColor = cssColor;

    const inner = document.createElement("div");
    inner.className = "text-center innerBox";
    inner.style.backgroundColor = cssColor;

    inner.innerHTML = `
        <p>${color.name}</p>
        <p>${color.type}</p>
        <p>${color.code}</p>
    `;

    box.appendChild(inner);
    boxList.appendChild(box);
}



function createColor(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    if (!validateName(values.color)) return;

    let isValid = false;
    switch (values.select) {
        case "rgb":
            isValid = validateRGB(values.code);
            break;
        case "rgba":
            isValid = validateRGBA(values.code);
            break;
        case "hex":
            isValid = validateHEX(values.code);
            break;
    }

    if (!isValid) return;

    const color = createColorObject(values.color, values.select, values.code);

    addCookieColor(color);
    renderColor(color);

    event.target.reset();
}



