import React, { useContext } from 'react'
import { Productdata } from '../../context/Productcontext'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const data = useContext(Productdata)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/products/${item.id}`)}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src={item.images?.[0]}   // safe access
                alt={item.title}
                className="h-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-green-600 font-bold text-xl mb-4">
                ${item.price}
              </p>

              <button
                onClick={(e) => e.stopPropagation()} // prevent navigation
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
