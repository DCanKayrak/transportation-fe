import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CompanyDetail } from '../components/CompanyDetail'

export const CompanyDetails = () => {
  return (
    <div>
        <Navbar/>
        <CompanyDetail/>
        <Footer/>
    </div>
  )
}
