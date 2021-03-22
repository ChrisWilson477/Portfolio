import React from 'react'
import BrainHeart from '../images/brainheart.png'

const Home = () => {
  return (
    <div>
      <header>
      <div className='split left home'>
        <div className='centered left-side'>
          <h1 className='left text '>Hi, I'm Chris.</h1>
          <h3 className='centered bottom-line' />
          <div className='vline' />

        </div>
      </div>
      <div >
      <img src={BrainHeart} alt='Half brain, half-heart' className='center-img'/>
      </div>
      <div className='split right home'>
        <div className='centered right-side'>
        <div className='vline-two' />
        <h4 className='centered top-line' />
        <h2 className='right text'>let's design <br /> something</h2>
        </div>
      </div>
      </header>
    </div>
  )
}

export default Home
