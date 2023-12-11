import reddit from './redditapi'

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = searchInput.value;
  const sortBy = document.querySelector('input[name="sortBy"]:checked').value;
  const searchLimit = document.getElementById("limit").value;

  if (searchTerm === "") {
    showMessage("Please add a search term", "alert-danger");
    }
    
    searchInput.value = ''

    reddit.search(searchTerm, searchLimit, sortBy)
        .then(results => {
            let output = `<div class="card-columns">`
            results.forEach(post => {
                const image = post.preview ? post.preview.images[0].source.url : `https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg`
                output += `
                <div class="card">
                <img src="${image}"/>
                <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p>${truncateText(post.selftext, 80)}</p>
                <a href=${post.url} target="_blank">Read More</a>
                <span class="badge subreddit"> Subreddit: ${post.subreddit}</span>
                <span class="badge"> Score: ${post.score}</span>
                </div>
                </div>
                `
            })
            output += '</div>'
            document.getElementById('results').innerHTML = output;
    })
});

function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const mainContainer = document.querySelector(".main-container");
  const searchContainer = document.querySelector(".search-container");
    mainContainer.insertBefore(div, searchContainer);
    
    setTimeout(()=> document.querySelector('.alert').remove(), 3000)
}

function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit)
    if (shortened == -1) { 
        return text
    } else {
        return text.substring(0, shortened)
    }
}