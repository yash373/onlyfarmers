import React from 'react'
import Scheme from '@/components/governmentschemes/Scheme'

const GovernmentSchemes = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Scheme link='https://www.enam.gov.in/web/' name='E-NAM' desc="an online trading platform for agricultural communities in India" />
      <Scheme link='https://pmkisan.gov.in/' name='PM-KMY' desc="a pension scheme for small and marginal farmers" />
    </div>
  )
}

export default GovernmentSchemes
