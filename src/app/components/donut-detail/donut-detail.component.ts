import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donut, Result } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  donut:Donut;
  constructor(private service:DonutService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params)=>{
      this.getDonutDetail(String(params.get("id")));
    });
  }

  getDonutDetail(id:string){
    this.service.getDonutDetail(id).subscribe((data)=>{
      this.donut = data;
    });
  }

  navigateToCart(){
    this.router.navigate(['cartDetail']);
  }

  addDonutToCart(){
    this.service.addDonutToCart(this.donut);
    this.navigateToCart();
  }



}
