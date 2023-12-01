const inputEl = document.getElementById("search")
const listEl = document.getElementById("names")

inputEl.addEventListener("keyup", filterNames)

function filterNames() {
    let filterValue = inputEl.value.toLowerCase()
    let namesArray = Array.from(listEl.querySelectorAll('.item'))
    
    for (names of namesArray) {
        if (names.textContent.toLowerCase().indexOf(filterValue) > -1) {
            names.style.display = ''
        } else {
            names.style.display = 'none'
        }
    }
}