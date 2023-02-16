// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSec: 0, isTimeRun: false}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({timeInSec: prevState.timeInSec + 1}))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRun: true})
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRun: false, timeInSec: 0})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRun: false})
  }

  renderSec = () => {
    const {timeInSec} = this.state
    const seconds = Math.floor(timeInSec % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMin = () => {
    const {timeInSec} = this.state
    const mins = Math.floor(timeInSec / 60)
    if (mins < 10) {
      return `0${mins}`
    }
    return mins
  }

  render() {
    const time = `${this.renderMin()}:${this.renderSec()}`
    const {isTimeRun} = this.state

    return (
      <div className="bg-image">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>

            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-button">
              <button
                className="start-button button"
                onClick={this.onClickStart}
                disabled={isTimeRun}
                type="button"
              >
                Start
              </button>
              <button
                className="stop-button button"
                onClick={this.onStop}
                type="button"
              >
                Stop
              </button>

              <button
                className="reset-button button"
                onClick={this.onReset}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
