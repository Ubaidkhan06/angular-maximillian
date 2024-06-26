import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipes: Recipe[];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }
}
