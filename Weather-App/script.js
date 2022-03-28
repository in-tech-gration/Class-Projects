const input = document.querySelector("#input")
const form = document.querySelector("form")

let apiKey = "4f2e26b21929422fafd143241220402"
let unsplashAccessKey = "NddPTHBFHOzRgHGxm6fk27tVYoYyIhmhfBpBCk5WFgI"

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (input.value !== "") {
    callApi(input.value, apiKey)
  }
})

function callApi(city, apiKey) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
  )
    .then((response) => response.json())
    .then((result) => {
      renderToDom(result)
      getImage(result.location.name)
    })
    .catch((error) => console.log("error", error))
}

function renderToDom(result) {
  const weatherDiv = document.querySelector(".weather")
  console.log(result)
  const {
    temp_c,
    condition: { text, icon }
  } = result.current
  const { name, localtime } = result.location
  const weather_icon = "https:" + icon
  const image = document.createElement("img")

  image.src = weather_icon
  weatherDiv.innerHTML = `
  <h2> ${name}</h2>
  <h3>Temp: ${temp_c} &#8451</h3>
  <span>${text}</span>
  <p> Time: ${localtime.split(" ")[1]}</p>
  `
  weatherDiv.appendChild(image)
}

function getImage(query) {
  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashAccessKey}`
  )
    .then((response) => response.json())
    .then((result) => {
      renderImages(result.results)
    })
    .catch((error) => console.log("error", error))
}

function renderImages(results) {
  // const container = document.querySelector(".container")
  // const image = document.createElement("img")

  // image.src = results[1].urls.full

  // image.style.width = "100%"
  // image.style.height = "100%"
  // image.style.position = "absolute"

  // container.append(image)
  document.body.style.backgroundImage = `url('${results[1].urls.full}')`
}
