import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donut } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  donuts: Donut[] = []

  totalCalories:number = 0;
  price:number = 0;
  
  constructor(private service:DonutService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.donuts = this.service.getDonutsInCart();
    this.donuts.forEach(element => {
      this.totalCalories += element.calories;
    });
    this.price = this.donuts.length;
  }

  navigateToHome(){
    this.router.navigate(['donutList']);
  }

  removeDonut(index: number){
    this.service.removeDonutFromCart(index);
  }

}
