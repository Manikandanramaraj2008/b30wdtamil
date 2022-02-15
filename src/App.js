import Hello from './Hello'
import Hellooo from './Hellooo'
import Welcome from './Welcome'


export default function App(){
    return (
      <div className="App">
          <Hello name= "Vallalyar"/>
          <Hello name= "Thiruvarutprakasha Vallalar"/>
          <Hello name= "Chidambaram Ramalingam"/>

          <Hellooo
      profile="https://1.bp.blogspot.com/-aKXqFgRSmEs/XERF6liZb8I/AAAAAAABW2I/ELs0O87C-9Qq3N3_S9R-epcyCbeFXuWfQCLcBGAs/s1600/G_L3_914.JPG"
       name ="Vallalyar"></Hellooo>
      <Hellooo 
      profile="http://3.bp.blogspot.com/_ye_-S-DaxNE/R2S-TNmkK-I/AAAAAAAAALE/g_5sT8wHQvA/w1200-h630-p-k-no-nu/vallalar+signature1.JPG"
      name ="Thiruvarutprakasha Vallalar"></Hellooo>
      <Hellooo
      profile ="https://gumlet.assettype.com/swarajya%2F2020-08%2F195c5be1-a49a-4328-84b2-977b20917dfd%2Fvallalar2.jpg?auto=format%2Ccompress&w=1200"
       name = "Ramalinga Adigal"></Hellooo>
        
      <Welcome name = "vallalyar"/>
       <Welcome name = "Thiruvarutprakasha Vallalar"/>
      <Welcome name = "Chidambaram Ramalingam"/>

      </div>
    );
   }

