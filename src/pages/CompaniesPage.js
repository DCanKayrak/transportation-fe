import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CompaniesList } from '../components/CompaniesList'
import { Sidebar } from '../components/Sidebar'

export const CompaniesPage = () => {
  return (
    <div>
        <Navbar/>
        <CompaniesList/>
        <Footer/>
    </div>
  )
}
