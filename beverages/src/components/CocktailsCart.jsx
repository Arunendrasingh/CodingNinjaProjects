import React from 'react'

function CocktailsCart({detail}) {

  const {strDrinkThumb, strDrink, strCategory, strAlcoholic, strInstructions} = detail
  console.log(detail)
  return (
    <div className='cocktail shadow-xl rounded-2xl'>
        <img src={strDrinkThumb} alt="" className='p-1 rounded-2xl'/>
        <div className='p-4 flex flex-col justify-between'>
            <h1 className='font-bold text-3xl text-sky-600 font-mono'>{strDrink}</h1>
            <span className='font-semibold text-gray-400 font-mono'>{strCategory}, {strAlcoholic}</span>
            <p className='text-slate-600 font-mono line-clamp-3'>{strInstructions}</p>
            <button className='mt-4 bg-sky-600 hover:bg-sky-700 text-white px-3 py-1 rounded-md hover:ring-2 ring-offset-1 hover:ring-slate-500	w-2/6'>Details</button>
        </div>
    </div>
  )
}

export default CocktailsCart