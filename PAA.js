// promise

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("Go to school"), 1000); 
// })
// .then(function(result) {
//     alert(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Go to class"), 1000);
//     });
// })
// .then(function(result) {
// alert(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Go to market"), 1000);
//     });
// })
// .then(function(result) {
//     alert(result);
// });

// async/await

async function gitAsync (username) {
    let github = await fetch(`https://api.github.com/users/${username}`);

    let githubUser = await github.json();
    let githubImgUrl = githubUser.avatar_url;

    window.open(githubImgUrl)
}

gitAsync("iqbalamr")

