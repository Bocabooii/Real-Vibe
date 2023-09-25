import React from 'react'

const Home = () => {
  return (
    <div>
        <div name="home" className="bg-gradient-to-b from-black to-gray-700 w-full h-screen mx-auto">
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-6xl font-marker m-2 bg-gradient-to-r from-pink-600 via-pink-500 to-white text-transparent bg-clip-text'>REAL VIBE</h1>
                <div className='flex flex-col justify-center items-center text-xl text-white font-gaming space-y-5'>
                  <p>Test your knowledge in our music trivia game!</p>
                  <p>How to play:</p>
                  <p>1. Read the random lyrics from recent top 100 songs</p>
                  <p>2. Click the artist photo that matches the lyrics</p>
                  <p>3. Save your score!</p>
                </div> 
                <div className='flex flex-col mx-auto p-2 m-5 bg-pink-500 rounded-md shadow-md shadow-white'>
                  <button className='text-white font-marker text-xl'>Start</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home