import ora from "ora"
import axios from "axios"
import chalk from "chalk"
import figlet from "figlet"
import fs from "fs"

const person = process.argv[2]

const spinner = ora("Loading your github profile")
spinner.color = "yellow"
spinner.start()

const prettier = (label, data) =>
  console.log(chalk.red(label), chalk.yellow(data))
const displayData = (data) => {
  Object.keys(data).forEach((k) => {
    if (data[k]) prettier(k, data[k])
  })
}

const getGithubProfile = () => {
  return axios
    .get(`https://api.github.com/users/${person}`)
    .then((res) => {
      spinner.succeed()
      console.log(
        figlet.textSync(res.data.login + "'s Profile", {
          font: "Roman"
        })
      )
      saveDataToJsonFile(res.data)
      // displayData(res.data)
      prettier("Name", res.data.name)
      prettier("Company", res.data.company)
      prettier("Bio", res.data.bio)
      prettier("Public Repos", res.data.public_repos)
      prettier("Followers", res.data.followers)
      prettier("Following", res.data.following)
    })
}

getGithubProfile().catch((e) => {
  if (e.response.status === 404) {
    spinner.fail()
    console.log(
      "You need to provide your github username as an argument"
    )
  } else {
    spinner.fail()
    console.log(e.message)
  }
})

const saveDataToJsonFile = (data) => {
  fs.writeFile(
    `${data.name}.json`,
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) console.log(err)
    }
  )
}
