import { useEffect, useState } from "react"
import "./App.css"
import Recipe from "./components/Recipe"

function App() {
  const APP_ID = "d406494b"
  const APP_KEY = "cd00b647641a19de91ceaae3b834b79d"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("momo")

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  function getRecipes() {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => res.json())
      .then(data => setRecipes(data.hits))
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  return (
    <div className="App">
      <form type="search" className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={e => setSearch(e.target.value)}></input>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, idx) => <Recipe
          key={idx}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />)}
      </div>
    </div>
  )
}

export default App;