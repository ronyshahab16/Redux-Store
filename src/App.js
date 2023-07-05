
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Card from './component/Card';
import Cardsdata from './component/cardDetail';



function App() {
  const cards = Cardsdata.map((c, i)=>(
    <Card key={c.id} index={i}/>
    ))
    
  return (
    <div className="App">
     <Header/>
     <div className="feedContainer">
      <div className="cardItemContainer">

     {
      
      cards
       
     }
      </div>
     </div>
    </div>
  );
}

export default App;
