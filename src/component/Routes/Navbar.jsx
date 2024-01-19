import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBook,
  faSun,
  faMoon,
  
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignOut from "../Sign/SignOut";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Navbar({sunMode,mode,count}) {
  const [toggle, setToggle] = useState("none");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

const changeToggle=()=>
{

(toggle !== "none") ?setToggle("none"):
 setToggle("block");

}



  return (
    <div>
      <nav className=" ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={changeToggle}
              >
                <span className="absolute -inset-0.5" ></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
           <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <FontAwesomeIcon
                  className="h-8 w-auto pr-3 text-yellow-400"
                  icon={faBook}
                  beat
                />
                <span className="text-black font-bold"><span className="border-4 text-2xl border-red-600 ">Bo</span>ok Point</span>
              </div>
              <div className="hidden grow items-start lg:flex justify-center font-semibold  sm:ml-14 sm:block">
                <div className="flex space-x-6 ">
                  <Link
                   to="/Home"
                    className=" text-yellow-600  hover:text-yellow-600 rounded-md  py-2 text-base font-medium b relative   block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    aria-current="page"
                  >
                    
                    Home
                  </Link>

                  <Link
                   to="/FeatureAuthor"
                    className="text-black  hover:text-yellow-600 rounded-md  py-2 text-base font-medium b relative   block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Author
                  </Link>
                  <Link
                   to="/Genres"
                    className="text-black hover:text-yellow-600 rounded-md  py-2 text-base font-medium b relative   block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Genres
                  </Link>
                  <Link
                   to="/Featured"
                    className="text-black hover:text-yellow-600 rounded-md  py-2 text-base font-medium b relative   block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Feature
                  </Link>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             
          {!loggedIn? <Link onClick={handleLogin}
             to="/Signin"
             className="relative rounded-full p-1 text-gray-400  focus:outline-none "
           >

             <FontAwesomeIcon  
               icon={faUser}
               className="text-black text-xl hover:text-yellow-600"
             />
           </Link>:<SignOut onClick={handleLogout}/>}  
            
              <div className="relative ml-7">
                <Link to="/CartList"
                  className="relative flex rounded-ful"
                
                >
                  <div className="absolute text-center rounded-md w-4 h-4 bg-red-500 font-normal text-gray-200 leading-4 text-xs mx-6">{count}</div>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-black text-2xl hover:text-yellow-600"
                  />
                </Link>

              </div>
              <button className="relative flex rounded-ful ml-10  " onClick={sunMode} >
                <span className="dark:hidden relative ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >{
(mode!== "black")?
                    <FontAwesomeIcon
                      icon={faSun}
                      className="text-black text-lg hover:text-yellow-600"
                    />:
                      <FontAwesomeIcon
                      icon={faMoon}
                      className="text-white text-lg hover:text-yellow-600"
                    />}
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="togglevalue" style={{display: toggle}} >
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            <Link
             to="#"
              className=" bg-yellow-600 text-black hover:text-black-600 block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
             to="#"
              className="text-black  hover:text-yellow-600 block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
             to="#"
              className="text-black  hover:text-yellow-600 block rounded-md px-3 py-2 text-base font-medium"
            >
              Item
            </Link>
            <Link
             to="#"
              className="text-black  hover:text-yellow-600 block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </Link>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}
