
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { BackbtnComponent } from './backbtn/backbtn.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartService } from './cart.service';
import { BackButtonDirective } from './back-button.directive';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing-module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductAlertComponent,
    BackbtnComponent,
    ShippingComponent,
    BackButtonDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
    //    RouterModule.forRoot([
    //   { path: 'products/:productId', component: ProductDetailsComponent },
    //   { path: '', component: ProductListComponent },
    //   { path: 'products/:productId', component: ProductDetailsComponent },
    //   { path: 'cart', component: CartComponent },
    //   { path: 'shipping', component: ShippingComponent },
    // ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
