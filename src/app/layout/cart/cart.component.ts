import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : any;
  cartProducts: any;

  constructor(private provider: ProviderService,) { 
  this.getCart()
  }

  ngOnInit(): void {
  }

  getCart(){
    this.provider.BD_ActionPost('cart', 'getProductCart',{}).subscribe({
      next:(data:any)=>{
        this.cart= data;
        console.log(this.cart);
        this.cartProducts = JSON.parse(this.cart[0].productos)
        console.log(this.cartProducts);
      },error:(err )=>{
        console.log(err)
      }
    })
  
}
  

}
