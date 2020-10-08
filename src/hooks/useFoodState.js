import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default initialFood => {
    const [bestFood, setBestFood] = useState(initialFood);

    return {
        bestFood,
        addFood: (newFoodText) => {
            setBestFood([...bestFood, { id: uuidv4(), food: newFoodText, favourite: true }]);
          },
          removeFood: (foodId) => {
            const updatedFood = bestFood.filter((food) => food.id !== foodId);
            setBestFood(updatedFood);
          },
          toggleFavourite: (foodId) => {
            const updatedFood = bestFood.map(food => 
                food.id === foodId ? {...food, favourite: !food.favourite } :
                food
          );
          setBestFood(updatedFood)
        },
        editFood: (foodId, newFood) => {
            const updatedFood = bestFood.map(best => 
                best.id === foodId ? {...best, food: newFood } :
                best
            );
            setBestFood(updatedFood);
        }        
    }
}
