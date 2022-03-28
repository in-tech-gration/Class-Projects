// TODO: add loading element or animation

/**
 * Step 1: Know what you want to do.
 * Step 2: Look for data sources AKA APIs.
 * Step 3: Have a design
 * Step 4: Look into the API documentation
 * Step 5: Get the base URL of your API
 * Step 6: Find your desired query
 * Step 7: Figure out the authorization of your api. get your api key.
 * Step 8: Once you have all the necessary credentials for making requests to your API
 * Step 9: Fetch Data. Turn it into JSON.
 * Step 10: Conosle.log() your data.
 * Step 11: Display your data in your page with HTML and CSS
 */

const input = document.querySelector("#input")
const form = document.querySelector("form")
const weatherElement = document.querySelector(".weather")

const apiKey = ""
const unsplashApiKey = ""

// http://api.weatherapi.com/v1/current.json

form.addEventListener("submit", function (event) {
  event.preventDefault()

  let weatherAPIBase = "http://api.weatherapi.com/v1"
  let query = "current.json"
  fetch(`${weatherAPIBase}/${query}?key=${apiKey}&q=${input.value}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data.location.name, data.location.localtime)
      console.log(data)
      document.querySelector("#name").innerText = data.location.name
      document.querySelector("#time").innerText =
        data.location.localtime
      document.querySelector("#temp").innerHTML =
        data.current.temp_c + "&#8451"
      document.querySelector("#condition").innerHTML =
        data.current.condition.text
    })

  fetch(
    `https://api.unsplash.com/search/photos?query=${input.value}&client_id=${unsplashApiKey}`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      document.body.style.backgroundImage = `url('${data.results[0].urls.full}')`
      // console.log(data.results[0].urls.full)
    })
})
