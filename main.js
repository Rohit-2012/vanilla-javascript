const searchResults = document.getElementById("search-results");
const searchValue = document.getElementById("search-input");
document.getElementById("search-form").addEventListener("submit", geocode);
function geocode(e) {
  e.preventDefault();
  let location = searchValue.value;
  const key = "pk.43094b125b3bd7df5652e296a5ba72be";
  fetch(
    `https://eu1.locationiq.com/v1/search?key=${key}&q=${location}&format=json`
  )
    .then((response) => response.json())
    .then((res) => {
      let output = "";

      res.forEach((location) => {
        output += `
              <div class="output">
              <h2>${location.display_name}</h2>
              <p><span>lat: </span> ${location.lat}</p>
              <p><span>lon: </span> ${location.lon}</p>
              <p ><span>Type: </span> <span class='type'> ${
                location.type[0].toUpperCase() + location.type.slice(1)
              }</span></p>
              </div>
              `;
      });
      searchResults.innerHTML = output;
      console.log(res);
    })
    .catch((error) => console.log("Error message:", error.message));

  searchValue.value = "";
}
