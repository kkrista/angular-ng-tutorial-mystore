
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    product!: { name: string; price: number; short_desription: string; description: string; short_description: string; imgUrl: string; } | { name: string; price: number; short_description: string; imgUrl: string; description: string; short_desription?: undefined; };
  products: any;

    constructor(private route: ActivatedRoute, private cartService: CartService) {  }

    ngOnInit() {
      console.log(this.products);
       this.route.paramMap.subscribe(params => {
       this.product = products[+params.get('productId')!];
     });

    }

    addToCart(product: any) {
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(product);
    }

  }
