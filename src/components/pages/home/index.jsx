import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import HomePage from './HomePage'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Zeitmovie - Home</title>
        </Helmet>
      </HelmetProvider>

      <HomePage />
    </>
  )
}

export default index
