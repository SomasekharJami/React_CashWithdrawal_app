import './index.css'

const DenominationItem = props => {
  const {cashDetails, onReduce} = props
  const {value} = cashDetails
  const onReducing = () => {
    onReduce(value)
  }
  return (
    <li className="listItem">
      <button className="bton" type="button" onClick={onReducing}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
