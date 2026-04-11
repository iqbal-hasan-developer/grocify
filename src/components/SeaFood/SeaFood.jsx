import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
        <CategoryPage title="Meat & SeaFoof" bgImage={BgSeaFood} categories={['Seafood', 'Meat']} />
    </div>
  )
}

export default SeaFood