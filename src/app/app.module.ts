import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MyProductComponent } from './my-product/my-product.component';
import {ItemComponent} from './my-product/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProductComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
