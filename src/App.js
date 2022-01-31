
import './App.css';

export function App() {
  return (
    <div className="App">
      
        
    </div>
  );
}

export default App;




function App() {
  return (
    <div className="App">
      <Welcome name = "Ramalingam vaarungal Sutha Sanmargam" 
      img="https://1.bp.blogspot.com/-aKXqFgRSmEs/XERF6liZb8I/AAAAAAABW2I/ELs0O87C-9Qq3N3_S9R-epcyCbeFXuWfQCLcBGAs/s1600/G_L3_914.JPG"/>
        <Welcome name = "vallalar samarasa sutha sanmarga sangathil kooduvom"
        img="https://soonyata.home.xs4all.nl/Soruba%20samadhi/Ramalinga-small.jpg"/>
      <Welcome name = "ManiVani vanangukirom Sathya Gnanagh Sabai,dharumasalai"
      img="https://gumlet.assettype.com/swarajya%2F2020-08%2F195c5be1-a49a-4328-84b2-977b20917dfd%2Fvallalar2.jpg?auto=format%2Ccompress&w=1200"/> 
      </div> 
  );
}

export default App;

function Welcome({name,img}){
  
  return (
    <div>
      <img src ={img} id="img" alt=""/>
      <h1>Hello,{name}👌🌹</h1>
    </div>
  )
}