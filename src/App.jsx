import Navbar from "./component/Routes/Navbar";
import "./App.css";

import Home from "./component/Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeatureAuthor from "./component/Routes/FeatureAuthor";
import Genres from "./component/Routes/Genres";
import { useState } from "react";
import Loader from "./component/Loader";
import Featured from "./component/Routes/Featured";
import Signin from "./component/Sign/Signin";
import Signup from "./component/Sign/Signup";
import CartList from "./component/Cartlist";
import { app } from "./component/Firebase";
function App() {
  const [mode, setMode] = useState("#fdf2f8");
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  //darkmode
  const sunMode = () => {
    mode !== "#fdf2f8" ? setMode("#fdf2f8") : setMode("black");
  };

  //addtocart
  const addItem = (data, name) => {
    const existingItem = cart.find((item) => item.id === name);

    if (existingItem) {
      existingItem.Quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...data, Quantity: 1, id: `${data.name}` }]);
    }
  };
  //remove
  const remove = (index) => {
    const updatedTasks = [...cart];
    updatedTasks.splice(index, 1);
    setCart(updatedTasks);
  };

  return (
    <>
      <div className="" style={{ background: mode }} id="app">
        {isLoading ? (
          <div className="w-full bg-white flex mt-72 justify-center ">
            <Loader />
          </div>
        ) : (
          <div>
            <BrowserRouter>
              <Navbar sunMode={sunMode} mode={mode} count={cart.length} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Featureauthor" element={<FeatureAuthor />} />
                <Route path="/Genres" element={<Genres />} />
                <Route path="/Featured"element={<Featured addItem={addItem} />}/>
                <Route path="/Shopnow" element={<Featured />} />
                <Route path="/Signup" element={<Signup app={app} />} />
                <Route path="/Signin" element={<Signin app={app} />} />
                <Route path="/CartList"element={<CartList cart={cart} remove={remove} />}
                />
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
