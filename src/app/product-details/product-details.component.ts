import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
products = products;
  product: any

  constructor(private route: ActivatedRoute, private cartService: CartService) {  }

  ngOnInit() {
    console.log(this.products);
     this.route.paramMap.subscribe(params => {
     this.product = products[+get('productId')];
   });

  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}

function get(arg0: string) {
  throw new Error('Function not implemented.');
}

