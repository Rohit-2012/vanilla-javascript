const form = document.getElementById("search-form");
const pinCode = document.getElementById("pin");
const output = document.getElementById("location-output");

form.addEventListener("submit", getLocation);
output.addEventListener('click', removeOutput)

function getLocation(e) {
  e.preventDefault();
  if (pinCode.value) {
    fetch(`http://api.zippopotam.us/IN/${pinCode.value}`)
      .then((response) => {
        if (response.status !== 200) {
          output.innerHTML = `<span class='error-message'>Error: ZIP code not found.<i class="fa-regular fa-circle-xmark close-icon"></i></span>`;
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        let cityDetails = ''
          data.places.forEach(place => {
              cityDetails += `
              <div class='location-output'>
            <div class="heading">
            <h4>${place["place name"]}</h4>
            <i class="fa-regular fa-circle-xmark close-icon"></i>
        </div>
        <p>State: ${place.state}</p>
        <p>PIN: ${data["post code"]}</p>
        <p>Longitude: ${place.longitude}</p>
        <p>Latiitude: ${place.latitude}</p>
        </div>`
          })
          output.innerHTML = cityDetails;
          pinCode.value =''
      });
  }
}

function removeOutput(e) {
    if (e.target.classList[2] === 'close-icon') {
        output.innerHTML = ''
        pinCode.value =''
    }
}
