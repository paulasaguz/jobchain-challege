import Card from './components/card'
import { AssetList } from './asset-list'
import './styles.css';

function App() {
  return (
    <div className="App">
        <h1>Mi Billetera</h1>
        <div className='card-container'>
          {AssetList.map((asset) => {
            return (
              <Card 
                name={asset.name}
                balance={asset.balance}
                src={asset.src}
                currency={asset.currency}
                minor={asset.minor}
                currencyMinor={asset.currencyMinor}
                mayor={asset.mayor}
                currencyMayor={asset.currencyMayor}
              />
            )
          })}
        </div>
    </div>
  );
}

export default App;
