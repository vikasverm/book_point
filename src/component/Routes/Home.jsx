import { Link } from "react-router-dom";
import Review from '../Review'
import Footer from "./Footer";
// eslint-disable-next-line react/prop-types
export default function Home() {

  return (
   <>

    <div className="relative w-full  " >
      
      <div className=" bg-[url('/src/component/img/wp2036903-books-wallpapers-modified.jpg')] bg-center bg-no-repeat bg-cover mx-16 h-screen                                         " id="Home">
    <div className="relative isolate z-0  px-6 pt-14 lg:px-8  ">
      <div className="relative mx-auto max-w-2xl py-24 ">
        <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl ">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2  sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            ></path>
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC"></stop>
                <stop offset="1" stopColor="#FF80B5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold tracking-tight animate-fade-in-down text-white sm:text-6xl">
          Today a reader, tomorrow a leader.
          </h1>
          <p className="homedescription mt-6 text-lg leading-8 text-yellow-600 " >
          &#34;Books are mirrors: You only see in them what you already have inside you.&#34;
          </p>
          <div className="homebutton mt-10 flex items-center justify-center gap-x-2 ">
          <Link to="/Shopnow" className=" shadow-[3px_2px_20px_2px_#facc15] relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-900 opacity-100 group-hover:-translate-x-8"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Shop Now</span>
<span className="absolute inset-0 border-2 border-white rounded-full"></span>
</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    <div>
    
      

  </div>
<Review/>
<Footer />



   </>
  )
}
