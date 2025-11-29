async function showGithubUserInfo(userUrl){
    let fullUrl = "https://api.github.com/users/" + userUrl;
    let response = await fetch(fullUrl);
    let json = await response.json();

    console.log(json)
}

showGithubUserInfo("MaksymPlichuk");

