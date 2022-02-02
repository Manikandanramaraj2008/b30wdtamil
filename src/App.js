
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
       <Welcome/>
   {/* < Movie/> */}
        </div>
 } 

function Welcome({name,profile}){
  // const[like,setLike]= useState(0)
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
//     <button onClick={()=>setLike(like+1)}>👍{like}</button>
//   </div>
// )

// }


// const x =10;
// console.log(x);

// const y =[3,4,5]
// y.push(7)=[3,4,5,7]
// const z =[...y,z]
// console.log(y,z)

// function Movie(){
//   const poster =
//   "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg";
//   const name ="The Avengers";
//   const rating = 8;
//   const summary = "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.";

//   return <div className="movie-container">
//     <img src ={poster} alt = {name} className="movie-poster"/>
//     <div className="movie-specs"></div>
//     <h2 className="movie-name">{name}</h2>
//     <p className = "movie-rating">👌{rating}</p>
//     <p className ="movie-summary">{summary}</p>
//     </div>
// }

// function Welcome({name,profile}){
  
//   return (
//     <div className="Welcome">
//       <img className="user-profile-pic" src ={profile} alt ="profile-pic"/>
//       <h1>Hello,{name}👌🌹</h1>
     
//     </div>
//   );
//   }

  


