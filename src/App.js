import React, { useEffect , useRef } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { toggleTheme } from "./store";
import Aside from './components/Aside';
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
    
    const currenData = new Date();
    if(savedTheme && currenData.getHours() >= 17 && darkMode !== 'dark'){
      dispatch(toggleTheme())
    }
    // 저녁6시 이후 자동 다크모드 적용

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

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
          <>
            <Nav aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
            <Main />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
            <Aside />
          </>
      )
}

export default App;
