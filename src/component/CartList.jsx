import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Routes/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash ,faHeart} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function CartList({ cart ,remove}) {
  const navigate=useNavigate()
const [CART, setCART] = useState([])
useEffect(() => {
setCART(cart)
}, [cart])

const BacktoShop=()=>
{
navigate('/Featured')
}
  // eslint-disable-next-line react/prop-types
  let result = CART.map((i) => i.price*i.Quantity);
  let getId = CART.map((i) => i.id);

console.log(getId);
  const incomeValue = result
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    return (
      <>
      <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2 ">
        <h2 className="text-3xl flex justify-center font-bold">Your Cart</h2>
    
        {
        
        
        // eslint-disable-next-line react/prop-types
        CART?.map((cartItem, cartIndex) => {
          return (
            <ul
              key={cartIndex}
              className="flex flex-col divide-y shadow-md divide-gray-200 bg-white px-7 s"
            >
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                   
                    className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                    src={cartItem.url}
                    
                  />
                  <div className="flex w-full flex-col justify-between pb-4">
                    <div className="flex w-full justify-between space-x-2 pb-2">
                      <div className="space-y-1">
                        <p className="text-lg font-semibold leading-snug sm:pr-8">
                          {cartItem.name}{" "}
                        </p>
                        <p className="text-sm">{cartItem.Genres}</p>
                        <button onClick={()=>{const _CART=CART.map((item,index)=>{
                          return cartIndex===index?{...item,Quantity:item.Quantity>0?item.Quantity-1:0}:item
                        })
setCART(_CART)
                        }}  className="rounded-md border font-bold border-black px-2 py-1 text-sm  text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" >
                          -
                        </button>
                        <span className="font-bold p-1">{cartItem.Quantity}</span>
                        <button onClick={()=>{const _CART=CART.map((item,index)=>{
                          return cartIndex===index?{...item,Quantity:item.Quantity+1}:item
                        })
setCART(_CART)
                        }} className="rounded-md border border-black px-2 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">₹{cartItem.price*cartItem.Quantity}</p>
                      </div>
                    </div>
                    <div className="flex divide-x text-sm">
                      <button onClick={()=>remove(cartIndex)}
                        type="button"
                        className="flex items-center space-x-2 px-2 py-1 pl-0"
                      >
                     <FontAwesomeIcon icon={faTrash} className="h-4 text-red-600"/>
                        <span>{cartItem.name}</span>
  
                      </button>
                      
                      <button
                        type="button"
                        className="flex  items-center space-x-2 px-2 py-1"
                      >
                                             <FontAwesomeIcon icon={faHeart} className=" text-slate-400 hover:text-red-600"/>

                        <span>Add to favorites</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
       
       
        <div className="text-right bg-white px-10 py-10 ">
         
            
           <h4>TOTAL BALANCE :</h4>
  
   <div className="font-bold p-2 " >
   
    ₹{incomeValue}
 
    </div>
       
  
        <div className="flex justify-end space-x-4">
        
           <button   onClick={BacktoShop} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back To Shop</span>
<span className="relative invisible">Button Text</span>
</button>
<button    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Continue</span>
<span className="relative invisible">Button Text</span>
</button>
        </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  