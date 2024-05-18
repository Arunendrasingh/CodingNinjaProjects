import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function DrinkDetails() {
  const navigate = useNavigate();
  const { drinkId } = useParams();

  if (drinkId === undefined) {
    navigate(-1);
  }

  const [productDetail, setProductDetail] = useState({});
  console.log("Drink id is: ", drinkId);
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    strInstructions,
    idDrink,
    strGlass,
  } = productDetail;

  const calculateIngredient = () => {
    let ingredient = [];
    for (let i = 1; i <= 15; i++) {
      console.log(productDetail[`strIngredient${i}`])
      if (productDetail[`strIngredient${i}`] != null) {
        ingredient.push(productDetail[`strIngredient${i}`]);
      } else {
        break;
      }
    }

    console.log(ingredient)
    ingredient = ingredient.join(", ");
    console.log(ingredient)
    return ingredient;
  }

  useEffect(() => {
    async function fetchBeverageWithId() {
      try {
        const response = await fetch(url + drinkId);
        const beverageDetail = await response.json();

        // Now set the state of this component with the...
        let drinks = beverageDetail.drinks;
        if (drinks != null && drinks[0]) {
          console.log("Drinks: ", drinks[0]);
          setProductDetail(drinks[0]);
        } else {
          console.warning(
            `Failed to fined the Beverage Detail with id: ${drinkId}`
          );
          navigate("/");
        }
      } catch (error) {
        console.log(`Failed to get the Beverage Detail with ID: ${error}`);
        navigate("/");
      }
    }

    fetchBeverageWithId();
  }, [drinkId, navigate]);

  return (
    <div className="my-2 w-5/6 m-auto mt-10">
      <h1 className=".section-title text-center font-bold text-5xl mt-4 text-sky-800">
        {strDrink}
      </h1>
      <div className="grid grid-rows-1 ss:grid-cols-2 mt-10">
        <div className="pb-2 ss:pb-0 ss:pe-2 border-b-2 ss:border-b-0">
          <img src={strDrinkThumb} alt="" className="drink img rounded-lg" />
        </div>
        <div className="drink-info flex flex-col gap-3 border-t-2 ss:border-t-0 p-2">
          <p>
            <strong className="text-xl text-red-500">
              <span>Name: </span>
            </strong>
            <span>{strDrink}</span>
          </p>
          <p>
            <strong className="text-xl text-red-500">
              <span>Category: </span>
            </strong>
            <span>{strCategory}</span>
          </p>
          <p>
            <strong className="text-xl text-red-500">
              <span>Info: </span>
            </strong>
            <span>{strAlcoholic}</span>
          </p>
          <p>
            <strong className="text-xl text-red-500">
              <span>Glass: </span>
            </strong>
            <span>{strGlass}</span>
          </p>
          <p>
            <strong className="text-xl text-red-500">
              <span>Instruction: </span>
            </strong>
            <span>{strInstructions}</span>
          </p>
          <p>
            <strong className="text-xl text-red-500">
              <span>Ingredient: </span>
            </strong>
            <span>{calculateIngredient()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetails;
