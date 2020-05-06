import { Component, OnInit, Input} from '@angular/core';
import { Dish } from '../Shared/dish';
import { DishService } from '../services/dish.service';
import{DISHES} from '../Shared/dishes';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  //@Input()  
  dish = Dish;
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(String(id));

  }

  goBack(): void {
    this.location.back();
  }

}
