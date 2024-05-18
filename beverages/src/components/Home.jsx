import React, { useEffect, useState } from "react";
import Search from "./Search";
import CocktailsCart from "./CocktailsCart";
import Loader from "./Loader";

function Home() {
  // Get the list of beverages using API, then present the list,
  const [beverages, setBeverages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchBeverages(val_to_search) {
    setLoading(true);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val_to_search}`
    );
    const cocktails_list = await response.json();
    let drinks = cocktails_list["drinks"];
    if (drinks) {
      setBeverages(drinks);
    } else {
      setBeverages([]);
    }
    setLoading(false);
  }

  // useEffect(() => {
  //   // This useEffect will run only once, first render
  //   searchBeverages("c");
  // }, []);
  
  useEffect(() => {
    // Return a timeout function to load the searched value with delay of 2 seconds...
    const searchTimeout = setTimeout(() => {
      console.log("search: ", search);
      if (search !== "") {
        searchBeverages(search);
      }else{
        searchBeverages("c");
      }
    }, 1000);
    // Cleartimeout using
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [search]);

  return (
    <div>
      {loading && <Loader />}
      <Search search={search} setSearch={setSearch} />
      <section className="section border">
        <h1 className="text-center text-4xl font-mono font-semibold hover:text-sky-600 hover:font-bold">
          Cocktails
        </h1>
        <div className="cocktails-center w-11/12 mx-auto grid grid-cols-1 ss:grid-cols-2 ms:grid-cols-3 gap-3">
          {/* {Array.from({length: 30}, (v, i)=> <CocktailsCart key={i} />)} */}
          {beverages.length > 0 ? (
            beverages.map((be, i) => <CocktailsCart key={i} detail={be}/>)
          ) : (
            <p className="mt-8 text-red-400 font-bold text-2xl text-center">
              No Beverages Present to Display....
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
