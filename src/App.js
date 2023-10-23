import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { toggleTheme } from "./store";
import Aside from './components/Aside';

function App() {
  return (
    <>
        <Provider store={store}>
            <Inner />
        </Provider>
    </>
  );
}

function Inner() {

  const dispatch = useDispatch();
  const darkMode  = useSelector(state => state.dark)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && savedTheme !== darkMode) {
      dispatch(toggleTheme());
    }
    
    // const currenData = new Date();
    // if(currenData.getHours() >= 18 && darkMode !== 'dark'){
    //   dispatch(toggleTheme())
    // }

  }, [dispatch]);

  useEffect(() => {

    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [darkMode]);

  const language = useSelector(state => state.language);
  
  useEffect(() => {

    if (localStorage.getItem("language") !== language) {
      localStorage.setItem("language", language);
    }

  }, [language]);

  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />}/>
    </Routes>
    <Aside />
    </>
  );
}

export default App;
