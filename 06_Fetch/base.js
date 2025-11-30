let userImg = document.getElementById('user-img');
let userId = document.getElementById('user-id');
let userLogin = document.getElementById('user-login');
let userGitUrl = document.getElementById('user-url');
let userBlog = document.getElementById('user-blog');
let userCity = document.getElementById('user-city');
let userEmail = document.getElementById('user-email');
let userFollowers = document.getElementById('user-followers');
let userFollowing = document.getElementById('user-followings');
let userCreationDate = document.getElementById('user-creationDate');

async function showGithubUserInfo(userUrl) {
    let fullUrl = "https://api.github.com/users/" + userUrl;

    let response = await fetch(fullUrl);
    let json = await response.json();


    userImg.src = json.avatar_url;
    userId.innerHTML = json.id;
    userLogin.innerHTML = json.login
    userGitUrl.innerHTML = json.url;

    if (json.blog == null) { userBlog.innerHTML = 'Not Set'; }
    else { userBlog.innerHTML = json.blog; }

    if (json.location == null) { userCity.innerHTML = 'Not Set'; }
    else { userCity.innerHTML = json.location; }

    if (json.email == null) { userEmail.innerHTML = 'Not Set'; }
    else { userEmail.innerHTML = json.email; }

    if (json.followers == null) { userFollowers.innerHTML = 'Not Set'; }
    else { userFollowers.innerHTML = json.followers; }


    if (json.following == null) { userFollowing.innerHTML = 'Not Set'; }
    else { userFollowing.innerHTML = json.following; }

    userCreationDate.innerHTML = json.created_at;
    console.log(json)
}

let promptUser = document.getElementById('user-search');
let searchBtn = document.getElementById('searchBtn');
searchBtn.onclick = () => {
    console.log(promptUser.value);
    showGithubUserInfo(promptUser.value);
}
showGithubUserInfo("MaksymPlichuk");

