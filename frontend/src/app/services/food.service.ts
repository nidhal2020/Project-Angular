import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=> food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags
  }

  getAllFoodsByTag(tag:string):Food[]{
    if(tag=="All"){
      return this.getAll();
    }else{
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
  }


}
