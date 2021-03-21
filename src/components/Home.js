import React from 'react'
import BrainHeart from '../images/brainheart.png'

const Home = () => {
  return (
    <div>
      <div className='split left'>
        <div className='centered'>
          <h1>Left Side</h1>
        </div>
      </div>
      <div >
      <img src={BrainHeart} alt='Half brain, half-heart' className='center-img'/>
      </div>
      <div className='split right'>
        <div className='centered'>
          <h1 className='right'>Right Side</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
