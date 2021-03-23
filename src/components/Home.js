import React from 'react'
import BrainHeart from '../images/brainheart.png'

const Home = () => {
  return (
    <div>
      <div className='row '>
        <div className='col home-left-side-background'>
          <h1 className='home-left-text'>Hi, I'm Chris.</h1>
          <div className='left-vline' />
          {/* <h1 className='home-bottom-line'>h</h1> */}
        </div>
        <div className='center-img' >
        <img src={BrainHeart} alt='Half brain, half-heart' />
        </div>
        <div className='col home-right-side-background'>
          <h2 className='home-right-text'>let's design <br /> something</h2>
          <div className='right-vline' />
        </div>
      </div>
    </div>
  )
}

export default Home
