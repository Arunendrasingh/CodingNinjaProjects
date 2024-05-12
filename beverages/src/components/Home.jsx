import React from 'react'
import Search from './Search'
import CocktailsCart from './CocktailsCart'

function Home() {
  return (
    <div><Search />
    <section className="section border">
      <h1 className='text-center text-4xl font-mono font-semibold hover:text-sky-600 hover:font-bold'>Cocktails</h1>
      <div className="cocktails-center w-11/12 mx-auto grid grid-cols-1 ss:grid-cols-2 ms:grid-cols-3 gap-3">
         {Array.from({length: 30}, (v, i)=> <CocktailsCart key={i} />)}
      </div>
    </section>
    </div>
  )
}

export default Home