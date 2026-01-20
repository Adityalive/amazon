import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Productdata = createContext()

const Productcontext = ({ children }) => {
  const [Productdatacal, setProductdatacal] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        setProductdatacal(response.data)
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    }

    getData()
  }, [])

  return (
    <Productdata.Provider value={Productdatacal}>
      {children}
    </Productdata.Provider>
  )
}

export default Productcontext