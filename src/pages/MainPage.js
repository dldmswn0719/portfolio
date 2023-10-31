import React, { useRef } from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function MainPage() {

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
            <>
               <Nav aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
                <Main/>
                <About ref={aboutRef} />
                <Skills ref={skillsRef} />
                <Projects ref={projectsRef} />
                <Contact ref={contactRef} />
            </>
        )
}

export default MainPage