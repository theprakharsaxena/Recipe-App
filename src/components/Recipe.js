import Styles1 from './Recipe.module.css'

function Recipe({title, ingredients, calories, image}) {
    return (
        <div className={Styles1.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingre,idx) => (<li key={idx}>{ingre.text}</li>))}
            </ol>
            <p>{calories}</p>
            <img src={image} className={Styles1.image}/>
        </div>
    )
}

export default Recipe;