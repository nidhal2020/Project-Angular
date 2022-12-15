import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  user!:User;
  constructor(cartService:CartService,private userServive:UserService) {
    cartService.getCartObservable().subscribe(newCart=>{
      this.cartQuantity=newCart.totalCount;
    })

    userServive.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
   }

  ngOnInit(): void {
  }
  logout(){
    this.userServive.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
