import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is a sample recipe',
      'https://imgs.search.brave.com/7iw6Hlyz41HKDfT-LNoO185Q7tRENCcwpYKZVCk0eo0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL2RhbC1mcnkt/ZGFsLXJlY2lwZS5q/cGcud2VicA',
      [
        new Ingredient('Bread', '2'),
        new Ingredient('apple', '1'),
        new Ingredient('mango', '3'),
      ]
    ),
    new Recipe(
      'A test Recipe',
      'this is a sample recipe',
      'https://imgs.search.brave.com/7iw6Hlyz41HKDfT-LNoO185Q7tRENCcwpYKZVCk0eo0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL2RhbC1mcnkt/ZGFsLXJlY2lwZS5q/cGcud2VicA',
      []
    ),
    new Recipe(
      'A test Recipe',
      'this is a sample recipe',
      'https://imgs.search.brave.com/7iw6Hlyz41HKDfT-LNoO185Q7tRENCcwpYKZVCk0eo0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL2RhbC1mcnkt/ZGFsLXJlY2lwZS5q/cGcud2VicA',
      []
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
