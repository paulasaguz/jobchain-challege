import './style.css'
import bitcoinImage from './bitcoint-asset.png'

function Card({
  name,
  saldo,
  currency,
  minor,
  currencyMinor,
  mayor,
  currencyMayor,
}) {
  return (
    <div className="card">
      <img className="image" src={bitcoinImage} alt="Bitcoin" width="200px" height="200px"/>
      <div className='price-container'>
          <div>
            <h2 className='title'>{name}<span className='subtitle'>BTC</span></h2>
            <p>{currency}</p>
          </div>
          <div>
            <p>{saldo}</p>
            <p>{minor} {currencyMinor}</p>
          </div>
      </div>
    </div>
  )
}

export default Card