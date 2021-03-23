import React from 'react'
import BrainHeart from '../images/brainheart.png'
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/fade';

const Home = () => {
  return (
    <div className='home'>
      <div className='row'>
        <div className='hero-text'>
          <Fade delay={800}>
          <h1 className='home-left-text'>Hi, I'm Chris.</h1>
          </Fade>
          <Fade delay={1400}>
          <p className='home-paragraph-text'>A fullstack developer <br /></p>
          </Fade>
          <Fade delay={1800}>
          <p className='home-paragraph-text-two'>based out of beautiful Colorado</p>
          </Fade>
        </div>
        <div className='col home-right-side-background'>
         <Rotate top right delay={3000}>
          <h2 className='home-right-text'>let's design <br />something</h2>
          </Rotate>
        </div>
      </div>
    </div>
  )
}

export default Home
