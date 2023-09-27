import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  // This is the description of the game

const description = (
  <div className='flex flex-col justify-center items-center text-xl text-white font-gaming space-y-5'>
    <p>Test your knowledge in our music trivia game!</p>
    <p>How to play:</p>
    <p>1. Read the random lyrics from recent top 100 songs</p>
    <p>2. Click the artist photo that matches the lyrics</p>
    <p>3. Save your score!</p>
  </div>
)



  return (
    <div>
        <div name="home" className="bg-gradient-to-b from-black to-gray-700 w-full h-screen mx-auto">
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-6xl font-marker m-2 bg-gradient-to-r from-pink-600 via-pink-500 to-white text-transparent bg-clip-text'>REAL VIBE</h1>
                {description}
                <div className='flex flex-col mx-auto p-2 m-5 bg-pink-500 rounded-md shadow-md text-white shadow-white duration-300 hover:cursor-pointer hover:text-pink-500 hover:bg-gray-200 hover:shadow-black '>
                  <Link to='/game'>
                  <button className=' font-marker text-xl hover:text-pink-500'>Start</button>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home