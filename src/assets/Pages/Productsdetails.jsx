import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Productdata } from '../../context/Productcontext'

const Productsdetails = () => {
  const data = useContext(Productdata)
  const { id } = useParams()
  const navigate = useNavigate()

  const product = data.find(item => item.id === Number(id))

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg p-8">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 hover:underline"
        >
          ← Back to products
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-gray-100 rounded-xl flex items-center justify-center p-6">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="h-72 object-contain"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-green-600">
                ${product.price}
              </p>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Productsdetails
