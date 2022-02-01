
import './App.css';

 export default function App(){
 const users=[
            {
        profile:"https://1.bp.blogspot.com/-aKXqFgRSmEs/XERF6liZb8I/AAAAAAABW2I/ELs0O87C-9Qq3N3_S9R-epcyCbeFXuWfQCLcBGAs/s1600/G_L3_914.JPG",
        name:"Ramalingam vaarungal Sutha Sanmargam"
   },
   {
         profile:"https://soonyata.home.xs4all.nl/Soruba%20samadhi/Ramalinga-small.jpg",
         name:"vallalar samarasa sutha sanmarga sangathil kooduvom"
        },
 
        {
          profile:"https://gumlet.assettype.com/swarajya%2F2020-08%2F195c5be1-a49a-4328-84b2-977b20917dfd%2Fvallalar2.jpg?auto=format%2Ccompress&w=1200",
          name: "ManiVani vanangukirom Sathya Gnanagh Sabai,dharumasalai"
        }

      ];
return <div className='App'>
  {users.map((usr)=>(<Welcome name={usr.name}profile={usr.profile}/>
       ))}
  
        </div>
 } 

function Welcome({name,profile}){
  
  return (
    <div className="Welcome">
      <img className="user-profile-pic" src ={profile} alt ="profile-pic"/>
      <h1>Hello,{name}👌🌹</h1>
    </div>
  );
  }

// function counter(){
// return(
//   <div>
//     <button>like</button>
//   </div>
// )

// }



