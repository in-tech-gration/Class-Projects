const BASE_URL = "https://restcountries.com/v2/all"

const btn = document.querySelector("button")
const input = document.querySelector("input")

function getCountriesData() {
  return fetch(BASE_URL)
    .then(turnDataIntoJson)
    .then(renderDataToDom)
    .catch(handleError)
}

function filterCountryData() {
  getCountriesData()
}

btn.addEventListener("click", filterCountryData)

function turnDataIntoJson(response) {
  return response.json()
}

function renderCountry(country) {
  if (country.name === "Afghanistan") return
  const div = document.createElement("div")
  div.classList.add("country")
  const h2 = document.createElement("h2")
  h2.innerHTML = country.name

  const p = document.createElement("p")
  const img = document.createElement("img")

  p.innerHTML = country.population
  img.src = country.flag
  img.style.height = "220px"
  img.style.width = "220px"
  div.append(h2, p, img)
  document.body.append(div)
}

function renderDataToDom(data) {
  let collection = document.querySelectorAll(".country")

  for (let a = 0; a < collection.length; a++) {
    console.log(collection[a])
    collection[a].remove()
  }

  for (let i = 0; i < data.length; i++) {
    const country = data[i]
    if (country.region === input.value) {
      renderCountry(country)
    }
  }
}

function handleError(err) {
  console.log(err)
  alert("Something went wrong")
}

// getCountriesData()
