import "./App.css";
 
 export default function Hellooo({profile,name}){
   return (
     <div className='Hellooo'>
       <img className="user-profile-pic" src ={profile} alt= "profile-pic" />
     <h1>Hello..!!! {name}🌹👍💖</h1>
     </div>
   );
 }

