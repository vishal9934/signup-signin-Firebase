
import './App.css';
// import { getDatabase,set,ref } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "./Firebase";
import Signup from './components/Signup';
import Signin from './components/Signin';

// const db=getDatabase(app);
const auth=getAuth(app);

function App() {
  // const putData=() => {
  //   set(ref(db,"user/vishal"),{
  //     name:"Vishal verma",
  //     id:1,
  //     age:23
  //   })
  // }
     const signupUser=()=>{
      createUserWithEmailAndPassword(
        auth,
        "vk99344305@gmail.com",
        "vishu99344305"
      ).then((value)=>console.log(value))
     }

  return (
    <div className="App">
      <div>SignUp page</div>
      <Signup/>
      <div>Signin page</div>
      <Signin/>
    </div>
  );
}

export default App;
