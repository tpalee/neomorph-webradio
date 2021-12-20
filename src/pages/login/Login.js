import React, {useForm,  useState} from 'react'
import app from '../../firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
const[action, setAction] = useState('login');
const[email, setEmail] = useState('');
const [password, setPassword]=useState('');


function onFormSubmit(e){
e.preventDefault();
    console.log(`login with ${email} and ${password}`);
   

  
        if( action === 'login' ) {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });


        }
            
            
          
    
          if( action === 'register' ) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
          }

        }

    return (
        <div>
            <h1>{action}</h1>
            <form
            onSubmit={onFormSubmit}>

<input 
type="email" 
placeholder='emailadres'
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<input
 type="password" 
placeholder='password'
value={password}
onChange={e=>setPassword(e.target.value)}
/>
<button type="submit"
>Submit</button>

            </form>
            <a id='logintoggle' href='#' onClick={ f => setAction( action == 'login' ? 'register' : 'login' ) }>{ action == 'login' ? 'Register' : 'Login' } instead</a>

        </div>
    )
}

export default Login


