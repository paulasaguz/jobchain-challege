import Card from './components/card'
import { AssetList } from './asset-list'
import './styles.css';
import Sidebar from './components/sidebar';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="layout">
        <Sidebar />
        <div className='main'>
          <h1>Mi Billetera</h1>
          <Navigation />
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
    </div>
  );
}

export default App;
