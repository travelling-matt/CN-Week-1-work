let coffeeShop = {
    branch: 'Costa',
    drinks: ['Coffee', 2.50, 'Tea', 1.50, 'Hot Chocolate', 3],
    food: ['Croissant',  3.50, 'Sandwich', 2],
    drinksOrdered(drink){
        let order = ''
        let cost = 0
        for(let i = 0; i < drink.length; i++){
            for(let j = 0; j < this.drinks.length; j++){
                if (drink[i] === this.drinks[j]) {
                    cost += this.drinks[j + 1]
                    order = order + `= ${drink[i]} £${this.drinks[j + 1]} =`
                }
            }
        }
        return `Drink ${order}\nCost - £${cost}\n`
    },
    foodOrdered(food){
        let order = ''
        let cost = 0
        for(let i = 0; i < food.length; i++){
            for(let j = 0; j < this.food.length; j++){
                if (food[i] === this.food[j]){
                    cost += this.food[j + 1]
                    order = order + `= ${food[i]} £${this.food[j + 1]} =`
                }
            }
        }
        return `Food ${order}\nCost - £${cost}\n`
    }
}
console.log(coffeeShop.foodOrdered(['Croissant', 'Sandwich']), coffeeShop.drinksOrdered(['Coffee', 'Tea']))