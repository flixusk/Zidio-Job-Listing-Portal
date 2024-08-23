import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/footer'
import Carousel from '../components/carousel'

const Home = () => {
  return (
    <div className='m-0 p-0 bg-stone-950 w-full flex flex-col min-h-screen overflow-hidden'>
      <Navbar />
      <div className='mx-32 my-4 bg-neutral-950 items-center rounded-lg p-8 max-w-none shadow-lg'>
        <div className='text-center text-white text-6xl font-bold mb-4'>
          <h1 className="m-0">Hiring is a Hassle</h1>
          <h2 className="m-0 text-4xl font-medium mt-2">We make it a bit simpler</h2>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
  <div className='my-12 mx-2 relative bg-white rounded-lg shadow-lg h-64 overflow-hidden'>
    <img
      src="/assets/sliders/banner2.png"
      alt="Advertisement"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        <div className='w-full max-w-screen-xl mx-auto overflow-x-auto px-2 pt-16 pb-28'>
          <Carousel/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
