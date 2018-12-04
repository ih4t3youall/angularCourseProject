import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
 new Recipe('nombre','Descripcion','https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe.jpg')
//new Recipe('nombre 2','Descripcion2','http://cdn1.tmbi.com/TOH/Images/Photos/37/1200x1200/exps25157_FM153592B03_18_12b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
