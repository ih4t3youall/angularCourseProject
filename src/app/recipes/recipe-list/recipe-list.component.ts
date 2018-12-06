import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
//recipe :Recipe;
  recipes: Recipe[] = [
 new Recipe('nombre','Descripcion','https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe.jpg'),
new Recipe('nombre 2','Descripcion2','http://cdn1.tmbi.com/TOH/Images/Photos/37/1200x1200/exps25157_FM153592B03_18_12b.jpg'),
new Recipe('nombre 2','Descripcion2','http://cdn1.tmbi.com/TOH/Images/Photos/37/1200x1200/exps25157_FM153592B03_18_12b.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipeEL: Recipe){

    this.recipeWasSelected.emit(recipeEL);

  }


}
