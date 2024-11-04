import React from 'react'
import '../css/HomePage.css'
import Typewriter from 'typewriter-effect';
function HomePage() {
  return (
    <>
      <div className='main'>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            wrapperClassName: 'typing',
            cursorClassName: 'cursor',
          }}

          onInit={(typewriter) => {
            typewriter.typeString('Welcome to my portfolio!')
              .pauseFor(2500)
              .deleteAll()
              .pauseFor(2000)
              .start();
          }}
        />

      </div>
      <div className='about'>
          about me
      </div>
    </>
  )
}

export default HomePage
