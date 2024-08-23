import React from 'react'
import '../components/carousel_style.css'

const Carousel = () => {
  return (
    
    <div className='slider' style={{ "--width": "100px", "--height": "100px", "--quantity": "7",  }}>
        <div className='list'>
            <div className="item" style={{"--position": "1"}}><img src="/assets/sliders/1.png" alt="" /></div>
            <div className="item" style={{"--position": "2"}}><img src="/assets/sliders/2.png" alt="" /></div>
            <div className="item" style={{"--position": "3"}}><img src="/assets/sliders/3.png" alt="" /></div>
            <div className="item" style={{"--position": "4"}}><img src="/assets/sliders/4.png" alt="" /></div>
            <div className="item" style={{"--position": "5"}}><img src="/assets/sliders/5.png" alt="" /></div>
            <div className="item" style={{"--position": "6"}}><img src="/assets/sliders/6.png" alt="" /></div>
            <div className="item" style={{"--position": "7"}}><img src="/assets/sliders/7.png" alt="" /></div>
        </div>
    </div>
  )
}

export default Carousel;