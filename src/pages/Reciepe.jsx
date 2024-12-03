import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api'
import { Preloader } from '../components/Preloader'

function Reciepe() {
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getMealById(idMeal).then(data => setRecipe(data.meals));
    }, [idMeal]);

    return <>

        {!recipe.length ? <Preloader /> :

            <div className="recipe">

                <img src={recipe[0].strMealThumb} alt={recipe[0].strMeal} />
                <h1>{recipe[0].strMeal}</h1>
                <h6>Category: {recipe[0].strCategory}</h6>
                {recipe[0].strArea ? <h6>Aria: {recipe[0].strArea}</h6> : null}
                <p>{recipe[0].strInstructions}</p>

                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe[0]).map(key => {
                                if (key.includes('Ingredient') && recipe[0][key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[0][key]}</td>
                                            <td>{
                                                recipe[0][`strMeasure${key.slice(13)}`]
                                            }</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>


                {recipe[0].strYoutube ? (
                    <div className='row'>
                        <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
                        <iframe
                            title={idMeal}
                            src={`https://www.youtube.com/embed/${recipe[0].strYoutube.slice(-11)}`}
                            allowFullScreen
                        />
                    </div>
                ) : null}


                <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
            </div>

        }
    </>
}

export { Reciepe }