import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount() {
    this.resumeTime()
  }

  resumeTime = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    this.stopTime()
  }

  stopTime = () => {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <div className="clock-container">
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        <div className="buttons-container">
          <button onClick={this.stopTime}>Stop time</button>
          <button onClick={this.resumeTime}>Resume time</button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Clock/>, document.getElementById("root"))
