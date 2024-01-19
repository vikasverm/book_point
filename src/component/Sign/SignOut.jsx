import { useEffect } from "react";
import { app } from "../Firebase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import {signOut} from 'firebase/auth'

import { getAuth,onAuthStateChanged} from 'firebase/auth'
const auth=getAuth(app)
export default function SignOut() {
    const [user, setUser] = useState(null);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {  if(user)
        {
          setUser(user);
        }else
        {
         console.log("you are logged out");
          setUser(null);
        }
      })
        }, []) 
        if(user===null){
          return( <div>
       
           
       </div>)}
  return (
    <div>
        <p>vikas</p>
        {console.log(name)}
   
        <FontAwesomeIcon className="h-5" icon={faSignOut} onClick={()=>signOut(auth)}/>

    </div>
  )
}
