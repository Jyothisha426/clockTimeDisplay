import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isClockDisplayed: false}

  onToggleClock = () => {
    this.setState(prevState => ({
      isClockDisplayed: !prevState.isClockDisplayed,
    }))
  }

  render() {
    const {isClockDisplayed} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {isClockDisplayed ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isClockDisplayed && <Clock />}
      </div>
    )
  }
}

export default App
