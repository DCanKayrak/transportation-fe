import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CompanyDetail } from '../components/CompanyDetail';
import { useParams } from 'react-router-dom';

export const CompanyDetails = (props) => {
  const { companyId } = useParams();

  return (
    <div>
        <Navbar/>
        <CompanyDetail companyId={companyId}/>
        <Footer/>
    </div>
  )
}
