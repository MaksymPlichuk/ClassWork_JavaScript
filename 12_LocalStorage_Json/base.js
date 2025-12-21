function registerFormHandle(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    localStorage.setItem("data", JSON.stringify(values));
    loadTableData();
}

const table = document.getElementById(`tBody`)

document.addEventListener("DOMContentLoaded", () => {
    loadTableData();
    setInterval(checkUserDataExist,3000)
})

function checkUserDataExist() {
    if (localStorage.getItem("data")) {
        console.log(`Data is Found....`)
    }
    else {
        loadTableData();
    }
}


function loadTableData() {
    const data = localStorage.getItem("data");
    if (data) {
        const userData = JSON.parse(data);
        console.log(userData);

        let country = convertUserCountry(userData);
        let city = convertUserCity(userData);
        let skills = convertUserSkills(userData);
        let gender = convertUserGender(userData);

        table.innerHTML = ` <tr>
                    <th scope="row">Firstname</th>
                    <td>${userData.firstName}</td>
                </tr>
                <tr>
                    <th scope="row">Lastname</th>
                    <td>${userData.lastName}</td>
                </tr>
                 <tr>
                    <th scope="row">Birthday</th>
                    <td>${userData.birthday}</td>
                </tr>
                 <tr>
                    <th scope="row">Gender</th>
                    <td>${gender}</td>
                </tr>
                 <tr>
                    <th scope="row">Country</th>
                    <td>${country}</td>
                </tr>
                 <tr>
                    <th scope="row">City</th>
                    <td>${city}</td>
                </tr>
                 <tr>
                    <th scope="row">Skills</th>
                    <td>${skills}</td>
                </tr>
                `
    }
    else {
        table.innerHTML = `<span class="text-center">NO DATA FOUND</span>`
    }
}

function convertUserCountry(data) {
    switch (data.country) {
        case "ukr":
            return "Ukraine"
        case "usa":
            return "USA"
        case "can":
            return "Canada"    
        default:
            return null;
    }
}
function convertUserCity(data) {
    switch (data.city) {
        case "kyiv":
            return "Kyiv"
        case "wash":
            return "Washington"
        case "ott":
            return "Ottawa"    
        default:
            return null;
    }
}
function convertUserSkills(data) {
    let skills = [];

    const possibleSkills = ["HTML", "CSS", "JS", "PHP", "C++", "JAVA", "C#"];
    for (const sk of possibleSkills) {
        if (data[sk]) {
            skills.push(sk);
        }
    }
    console.log(skills);
    return skills;
}
function convertUserGender(data) {
    switch (data.gender) {
        case "male":
            return "Male"
        case "female":
            return "Female"   
        default:
            return null;
    }
}