'use strict'

class Database {
  constructor () {
    const Recipe = require('./recipe').Recipe

    this.recipes = []

    this.recipes.push(new Recipe('Sweet Lorem', '25 mins', ['eggs', 'flour', 'sugar']))
    this.recipes.push(new Recipe('Sweet & Delish Dish For Two', '15 mins', ['milk', 'honey', 'sugar', 'vanilla extract']))
    this.recipes.push(new Recipe('Sweet Treat™', '30 mins', ['apples', 'oranges', 'bananas']))
  }

  getRecipeById (id) {
    return this.recipes[id]
  }

  recipeSearch (query, toolsAndEquipment = null) {
    query = query.trim()
    let results = []

    for (let i = 0; i < this.recipes.length; i++) {
      /* String.search(query) returns -1 if not found */
      if (this.recipes[i].title.search(query) >= 0) {
        results.push(this.recipes[i])
      }
    }

    return results
  }
}

module.exports = {
  Database: Database
}
