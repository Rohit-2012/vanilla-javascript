const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

search.addEventListener('keyup', () => searchCountries(search.value))

const searchCountries = async (searchText) => {
    const result = await fetch('./countries.json')
    const countries = await result.json()

    let matches = countries.filter(country => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return country.name.match(regex) || country.code.match(regex)
    })

    if (searchText.length === 0) {
        matches = []
        matchList.innerHTML = ''
    }
    renderCountries(matches)
}

const renderCountries = countries => {
    if (countries.length > 0) {
        const html = countries.map(country => {
            return `<div class="country">
            <h3>Country: ${country.name}</h3>
            <h4>Code: <span class='code'>${country.code}</span></h4>
            </div>`
        }).join('')
        
        matchList.innerHTML = html
    }
}