// Fetching users.
const apiURL = "https://jsonplaceholder.typicode.com/users"
const body = document.querySelector("body")

fetch(apiURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      const h2 = document.createElement("h2")
      const span = document.createElement("span")
      h2.innerText = data[i].name
      span.innerText =
        data[i].address.street + "-" + data[i].address.suite

      body.appendChild(h2)
      body.appendChild(span)
    }
  })
