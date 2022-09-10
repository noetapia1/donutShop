import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donutShop';

  constructor(private route:ActivatedRoute, private router:Router) { }
  navigateToHome(){
    this.router.navigate(['donutList']);
  }

  navigateToCart(){
    this.router.navigate(['cartDetail']);
  }
}
