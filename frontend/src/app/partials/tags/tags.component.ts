import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  Tags?:Tag[]
  constructor(foodService:FoodService) {
    this.Tags = foodService.getAllTags()
   }

  ngOnInit(): void {
  }

}
