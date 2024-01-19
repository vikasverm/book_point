import { ArrowRight } from 'lucide-react'
import {app} from '../Firebase'
import { useNavigate } from 'react-router-dom';
import {getAuth,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {useState} from 'react';
import { Link } from 'react-router-dom';
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
function Signup() {
const [email, setEmail] = useState("")
const [pasw, setPasw] = useState("")
const [name1, setName] = useState("")

const [visible, setVisible] = useState(true);

const navigate=useNavigate();

const removeElement = () => {
  setVisible((prev) => !prev);
};
const dataSubmit=()=> 
{
  if(name1&&pasw&&email)
  {
createUserWithEmailAndPassword(auth,email,pasw).then((value)=>alert(value))
navigate("/");

setEmail("")
setPasw("")
  }
}
const signupWithGoogle=()=>
{
  signInWithPopup(auth,googleProvider)
}

console.log(auth);
console.log(signupWithGoogle);

  return ( 
   <> <section>
    {visible&&<div id="login-popup" tabIndex="-1"
    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
    <div className="relative bg-white p-10  shadow">
  <button type="button" onClick={removeElement}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                    aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close popup</span>
            </button>
   <h2 className="text-center text-2xl font-bold leading-tight text-black">
         Sign up to your account
       </h2>
       <p className="mt-2 text-center text-sm text-gray-600 ">
         Don&apos;t have an account?{' '}
         <Link
           to="/Signin"
           title=""
           className="font-semibold text-black transition-all duration-200 hover:underline"
         >
          existing user sign in
         </Link>
       </p>
       <form action="#" method="POST" className="mt-8">
         <div className="space-y-5">
         <div>
             <label htmlFor="" className="text-base font-medium text-gray-900">
               {' '}
               Name{' '}
             </label>
             <div className="mt-2">
               <input
                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                 type="text" value={name}
                 placeholder="Name" onChange={((e)=>setName(e.target.value))}
               ></input>
             </div>
           </div>
           <div>
             <label htmlFor="" className="text-base font-medium text-gray-900">
               {' '}
               Email address{' '}
             </label>
             <div className="mt-2">
               <input
                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                 type="email" value={email}
                 placeholder="Email" onChange={((e)=>setEmail(e.target.value))}
               ></input>
             </div>
           </div>
           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="" className="text-base font-medium text-gray-900">
                 {' '}
                 Password{' '}
               </label>
               <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                 {' '}
                 Forgot password?{' '}
               </a>
             </div>
             <div className="mt-2">
               <input
                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                 type="password" value={pasw}
                 placeholder="Password" onChange={((e)=>setPasw(e.target.value))}
               ></input>
             </div>
           </div>
           <div>
             <button
               type="button" onClick={dataSubmit}
               className="inline-flex w-full items-center justify-center rounded-md bg-yellow-400 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-/80"
             >
               Get started <ArrowRight className="ml-2" size={16} />
             </button>
           </div>
         </div>
       </form>
       <div className="mt-3 space-y-3">
         <button
           type="button" onClick={signupWithGoogle}
           className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
         >
          <img src="" alt="" />
           Sign in with Google
         </button>
         <button
           type="button"
           className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
         >
           <span className="mr-2 inline-block">
             <svg
               className="h-6 w-6 text-[#2563EB]"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
             >
               <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
             </svg>
           </span>
           Sign in with Facebook
         </button>
       </div>
     </div>
   </div>
   </div>
  }
 </section>
   
   </>
  )
}

export default Signup;


