import React from 'react'

const Home = () => {
  return (
    <div>
        <div name="home" className="bg-gradient-to-b from-black to-gray-700 w-full h-screen mx-auto">
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-6xl font-marker m-2 bg-gradient-to-r from-pink-600 via-pink-500 to-white text-transparent bg-clip-text'>REAL VIBE</h1>
                <p className='text-xl text-white font-gaming'>This is a guessing game of music</p>
            </div>
        </div>
    </div>
  )
}

export default Home