import React from 'react'
import '../css/HomePage.css'
import Typewriter from 'typewriter-effect';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MdOutlinePerson4 } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
function HomePage() {
  return (
    <>
      <div className='main'>
        <div className='text'>
          <h2>
            Hi, I'm
          </h2>
          <div className='red'><h2>Campbell</h2></div>
        </div>
        <div className='type'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              wrapperClassName: 'typing',
              cursorClassName: 'cursor',
            }}

            onInit={(typewriter) => {
              typewriter.typeString('A Computer Science Student')
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(1000)
              typewriter.typeString('A Great learner')
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(1000)
              typewriter.typeString('A Hard Worker')
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(1000)
                .start();
            }}
          />

        </div>
        <button className='proj-button' onClick={() => scroll.scrollTo(850)}>Projects</button>

      </div>
      <div className='about'>
        <h1>About</h1>
        <div className='underline'>
        </div>
        <div className='underline2'>
        </div>
        <div className='writing'>
          <div className='left-div'>
            <FcAbout className='about-icon' />
            <h2 className='left'>I am a hardworking student studying Computer Science at the Auckland University of Technology, I am majoring in Software Development with a minor in Artificial Intelligence, I am in my 2nd year. I enjoy developing web applications, low-level operations and regular software, I also enjoy Video games and sports if you are interested feel free to contact me!</h2>
          </div>
          <div className='right-div'>
            <div></div>
            <div className='icons' id='react'>
              <FaReact />
              <p></p>
            </div>
            <div className='icons' id='html'>
              <FaHtml5 />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage
