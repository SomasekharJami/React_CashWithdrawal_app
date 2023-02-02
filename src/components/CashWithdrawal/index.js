import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onReduce = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="mainCon">
        <div className="innerCon">
          <div className="firstCon">
            <p className="imgP">S</p>
            <p className="nameP">Sarah Williams</p>
          </div>
          <div className="secondCon">
            <p className="balP">Your Balance</p>
            <div className="subCon1">
              <p className="balH">{balance}</p>
              <p className="caption">In Rupees</p>
            </div>
          </div>
          <p className="withH">Withdraw</p>
          <p className="withP">CHOOSE SUM (IN RUPEES)</p>
          <ul className="thirdCon">
            {denominationsList.map(eachItem => (
              <DenominationItem
                cashDetails={eachItem}
                key={eachItem.id}
                onReduce={this.onReduce}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
