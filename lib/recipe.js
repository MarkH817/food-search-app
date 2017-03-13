'use strict'

class Recipe {
  contructor (title, prepCookTime, ingredients, toolsAndEquipment = null) {
    this.title = title
    this.prepCookTime = prepCookTime
    this.ingredients = ingredients

    if (toolsAndEquipment === null) {
      this.toolsAndEquipment = []
    } else {
      this.toolsAndEquipment = toolsAndEquipment
    }
  }

  hasAllToolsAndEquip (usersTAE) {
    let result

    for (let i = 0; i < this.toolsAndEquipment.length; i++) {
      result = false

      /* Search the user's kitchen profile for each equipment */
      for (let j = 0; j < usersTAE.length; j++) {
        result = result || this.toolsAndEquipment[i] === usersTAE[j]
      }

      /* If any equipment is missing, return false */
      if (!result) return false
    }

    /* If it made it here, then the user has it all */
    return true
  }

  missingIngredients (usersIngredients) {
    let missing = []
    let found

    for (let i = 0; i < this.ingredients.length; i++) {
      found = false

      for (let j = 0; j < usersIngredients.length; j++) {
        found = found || this.ingredients[i] === usersIngredients[j]
      }

      if (!found) missing.push(this.ingredients[i])
    }

    return missing
  }
}

module.exports = {
  Recipe: Recipe
}
