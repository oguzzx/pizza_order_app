import React from 'react'
import Categories from '../Categories/Categories'

function PopularFoods() {
  return (
    <div className='popularFoods mt-36 flex flex-col items-center justify-center'>
      <div className="title">
        <h1 className='text-4xl font-bold'>Popular Foods</h1>
      </div>
      <div className="categories">
        <Categories />
      </div>
    </div>
  )
}

export default PopularFoods