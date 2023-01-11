import './style.css'

function Card({
  name,
  balance,
  currency,
  minor,
  currencyMinor,
  mayor,
  currencyMayor,
  src,
}) {
  return (
    <div className="card">
      <img className="image" src={src} alt="Bitcoin" width="200px" height="200px"/>
      <div className='price-container'>
          <div>
            <p className='title'>{name} <span className='subtitle'>{currency}</span></p>
            <small>{mayor} {currencyMayor}</small>
          </div>
          <div className='align-right'>
            <p>{balance}</p>
            <small>-{minor} {currencyMinor}</small>
          </div>
      </div>
    </div>
  )
}

export default Card