import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function App() {
  return React.createElement("div", null, [
    React.createElement("button", null, "Click Me"),
    React.createElement("button", null, "Click Me"),
    React.createElement("p", null, "0")
  ])
}

function JSXApp() {
  return (
    <div className="my-base-class">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function Main() {
  return (
    <div>
      <h1>Main Part</h1>
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

function Article() {
  return (
    <article>
      <h3>Article </h3>
      <img
        src="https://source.unsplash.com/800x800/?business/1"
        alt="Business Pic"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eligendi voluptatem voluptas odio! Fugit mollitia, saepe
        perspiciatis nesciunt laudantium inventore harum!
      </p>
    </article>
  )
}

function Footer() {
  return (
    <footer>
      <h3>Footer</h3>
      <form>
        <input type="text" placeholder="Input Form" />
        <input type="text" placeholder="Input Form" />
        <input type="text" placeholder="Input Form" />
      </form>
    </footer>
  )
}

ReactDOM.render(<JSXApp />, document.getElementById("root"))
