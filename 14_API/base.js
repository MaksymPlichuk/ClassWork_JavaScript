const url = "https://jsonplaceholder.typicode.com/users";
const box = document.getElementById(`namesBox`);
const table = document.getElementById(`userInfoTable`);
const postsBox = document.getElementById(`postsBox`);
let selectUserID = 0;

function fetchUsers() {
    fetch(url).then(content => content.json()).then(data => {
        console.log(data);

        box.innerHTML = ``;
        table.innerHTML = ``;
        for (const user of data) {
            box.innerHTML += `<div class="col-3 nameBox" onclick="loadUserInfo(event,'${user.id}')">${user.name}</div>`
        }
    }).catch(e => console.warn(e));
}

document.addEventListener("DOMContentLoaded", fetchUsers);
document.addEventListener("DOMContentLoaded", loadPosts);


function loadUserInfo(event, userID) {
    fetch(url + `/${userID}`).then(response => response.json()).then(data => {
        console.log(data)

        table.innerHTML = `<tr>
                        <td>Name:</td>
                        <td>${data.name}</td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td>${data.username}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>${parseAdress(data)}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>${data.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>${data.phone}</td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td>${data.website}</td>
                    </tr>`;
        selectUserID = data.id;

    }).catch(e => console.warn(e));
    postsBox.innerHTML = ``;
}

function parseAdress(user) {
    console.log(user.address)
    return `${user.address.city}, ${user.address.street}`
}

const postsURL = `https://jsonplaceholder.typicode.com/posts`;
function loadPosts() {
    postsBox.innerHTML = ``;

    fetch(postsURL).then(response => response.json()).then(data => {
        for (const post of data) {
            if (post.userId == selectUserID) {
                postsBox.innerHTML += `<div class="box col-3">
                            <h6>${post.title}</h6>
                            <p>${post.body}</p>
                        </div>`
            }
        }
    }).catch(e => console.warn(e));
}
