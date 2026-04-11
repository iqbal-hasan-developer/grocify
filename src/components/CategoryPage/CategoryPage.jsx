import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title, bgImage, categories=[]}) => {

    let filteredProducts = categories.includes('All') ? ProductList : ProductList.filter(product => categories.includes(product.category))

    const renderProduct = filteredProducts.map(product => {
        return (
            <Cards image={product.image} title={product.title} price={product.price} />
        )
    })

  return (
    <div>
        <Banner title={title} bgImage={bgImage} />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 py-20 max-w-350 mx-auto px-10">
            {renderProduct}
        </div>
    </div>
  )
}

export default CategoryPage