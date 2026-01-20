import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate(); // ✅ Call the hook

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">This is a dummying website shopp</h1>
        <button
          onClick={() => navigate("/Products")} // ✅ Corrected to onClick
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:scale-95"
        >
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Home