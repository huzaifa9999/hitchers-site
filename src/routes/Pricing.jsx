import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Imagehead from '../components/Imagehead'
import { Pricingcard } from '../components/pricing/Pricingcard'
export default function Pricing() {
  return (
   <>
   <Navbar/>
<Imagehead heading='PRICING' low='Choose Your Plan'/>
<Pricingcard/>
<Footer/>
   
   </>
  )
}
