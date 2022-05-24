const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const axiosContainer = document.querySelector(".axios-results__grid-container");
const githubContainer = document.querySelector(".github-results");
loadBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    console.log(searchValue);
    fetch(`https://api.github.com/users/${searchValue}`)
        .then((response) => response.json())
        .then((data) => {
            (githubContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
        });
});


const getPostsData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data)
            res.data.map((post) => {
                (axiosContainer.innerHTML += `
                <div class="axios-results__grid-item">
                <div class="axios-results__content">
              <p class="axios-results__title">${post.title}</p>
              <p class="axios-results__body">${post.body}</p>
              </div>
              </div>`)
            });
        });
};

getPostsData();