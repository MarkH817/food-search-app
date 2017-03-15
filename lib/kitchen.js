'use strict'

class Kitchen {
  constructor () {
    this._defined = false
    this.profile = {
      _reset: false,
      _saved: false,
      blender: false,
      cookieSheet: false,
      fridgeFreezer: false,
      grill: false,
      microwave: false,
      potsPans: false,
      stoveOven: false,
      toaster: false,
      bakingPowder: false,
      bakingSoda: false,
      sugar: false,
      butterMargarine: false,
      bread: false,
      rice: false,
      yeast: false,
      vanillaExtract: false,
      pasta: false,
      flour: false,
      creamCheese: false,
      cheese: false,
      milk: false,
      iceCream: false,
      whippedCream: false,
      apples: false,
      bananas: false,
      cherries: false,
      lemons: false,
      grapes: false,
      tomatoes: false,
      pomegranate: false,
      oranges: false,
      blueberries: false,
      beef: false,
      chicken: false,
      pork: false,
      eggs: false,
      fish: false,
      bacon: false,
      ham: false,
      turkey: false,
      sausage: false,
      cinnamon: false,
      honey: false,
      blackPepper: false,
      ketchup: false,
      mustard: false,
      relish: false,
      mayo: false,
      mint: false,
      bbqSauce: false,
      peanutButter: false,
      broccoli: false,
      carrots: false,
      cauliflower: false,
      corn: false,
      cucumber: false,
      lettuce: false,
      onions: false,
      potatoes: false
    }
  }

  define (customerProfile) {
    this.reset()
    this._defined = true
    this.profile._reset = false
    this.profile._saved = true

    for (let key in customerProfile) {
      if (this.profile.hasOwnProperty(key)) {
        if (customerProfile[key].length > 0) {
          this.profile[key] = true
        }
      }
    }
  }

  reset () {
    this._defined = false
    this.profile._reset = true
    this.profile._saved = false

    for (let key in this.profile) {
      if (this.profile.hasOwnProperty(key)) {
        this.profile[key] = false
      }
    }
  }
}

module.exports.Kitchen = Kitchen
