import React from 'react'
import CoreServices from './CoreServices'
import CoreServicesBanner from './CoreServicesBanner'
import PopularOfferings from './PopularOfferings'

const CoreServicesLayout = () => {
  return (
    <div>
        <CoreServicesBanner />
        <CoreServices></CoreServices>
        <PopularOfferings></PopularOfferings>
    </div>
  )
}

export default CoreServicesLayout