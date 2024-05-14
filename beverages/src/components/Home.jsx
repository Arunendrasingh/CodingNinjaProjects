import React, { useEffect, useState } from 'react'
import Search from './Search'
import CocktailsCart from './CocktailsCart'

function Home() {
  // Get the list of beverages using API, then present the list,
  const [beverages, setBeverages] = useState([])

  // Write a use effect to load the cocktails from server

  useEffect(() => {
    async function loadCocktails(){
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=c");
        const cocktails_list = await response.json();
        let drinks = cocktails_list["drinks"]
        // set the drinks
        setBeverages(drinks)
    }

    loadCocktails()
  }, [])

  return (
    <div><Search />
    <section className="section border">
      <h1 className='text-center text-4xl font-mono font-semibold hover:text-sky-600 hover:font-bold'>Cocktails</h1>
      <div className="cocktails-center w-11/12 mx-auto grid grid-cols-1 ss:grid-cols-2 ms:grid-cols-3 gap-3">
         {/* {Array.from({length: 30}, (v, i)=> <CocktailsCart key={i} />)} */}
         {beverages.map((be, i) => <CocktailsCart key={i} detail={be} />)}
      </div>
    </section>
    </div>
  )
}

export default Home