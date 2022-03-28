const fs = require("fs")

const notes = [
  {
    content: "My note number 1"
  },
  {
    content: "My note number 2"
  },
  {
    content: "My note number 3"
  }
]

fs.writeFile("./notes.json", JSON.stringify(notes), function (err) {
  if (err) {
    console.log(err)
  }
})

fs.readFile("./package.json", "utf8", function (err, data) {
  if (err) {
    console.log(err)
    return
  }
  console.log(JSON.parse(data).license)
})
