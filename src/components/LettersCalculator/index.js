// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {counter: 0}

  onUpdateValue = () => {
    console.log('letter in typed')
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {counter} = this.state

    return (
      <div className="bgContainer">
        <div className="CalculatorContainer">
          <h1 className="Heading">Calculate the letters you enter</h1>
          <label htmlFor="inputElement" className="label">
            Enter the phrase
          </label>
          <input
            id="inputElement"
            type="text"
            placeholder="Enter the phrase"
            className="inputContainer"
            onChange={this.onUpdateValue}
          />
          <div className="lettersCounter">
            <p className="counter">No.of letters: {counter}</p>
          </div>
        </div>
        <div className="ImgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="logo"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
