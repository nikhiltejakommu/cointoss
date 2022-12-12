import {Component} from 'react'

class CoinToss extends Component {
  state = {toss: 0, head: 0, tail: 0}

  tossCoin = () => {
    const tossNum = Math.floor(Math.random() * 2)
    this.setState({toss: tossNum})
    if (tossNum === 0) {
      this.setState(prevState => ({head: prevState.head + 1}))
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1}))
    }
  }

  render() {
    const {toss, head, tail} = this.state
    const total = head + tail
    return (
      <div>
        <div>
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {toss === 0 && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}
          {toss !== 0 && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <div>
            <button onClick={this.tossCoin}>Toss Coin</button>
          </div>
          <div>
            <p>
              Total: <span>{total}</span>
            </p>
            <p>
              Heads: <span>{head}</span>
            </p>
            <p>
              Tails: <span>{tail}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
