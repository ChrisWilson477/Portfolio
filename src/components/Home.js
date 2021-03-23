import React from 'react'
import BrainHeart from '../images/brainheart.png'
import Rotate from 'react-reveal/Rotate';

const Home = () => {
  return (
    <div className='inner-container'>
      <div className='row '>
        <div className='hero-text'>
          <h1 className='home-left-text'>Hi, I'm Chris.</h1>
          <p className='home-paragraph-text'>A fullstack developer <br /></p>
          <p className='home-paragraph-text-two'>based out of beautiful Colorado</p>
        </div>
        <div className='col home-right-side-background'>

          <h2 className='home-right-text'>let's design <br />something</h2>

        </div>
      </div>
    </div>
  )
}

export default Home
