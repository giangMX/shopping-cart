import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {

  items: Product[] = [
    {
      img: 'SDFSDF',
      name: 'Sản phẩm 01',
      description: 'Mô tả 01',
      price: 10000,
      quantity: 0,
    },
    {
      img: 'SDFSDF',
      name: 'Sản phẩm 02',
      description: 'Mô tả 02',
      price: 20000,
      quantity: 0,
    },
    {
      img: 'SDFSDF',
      name: 'Sản phẩm 03',
      description: 'Mô tả 03',
      price: 50000,
      quantity: 0,
    },
  ];

  constructor(public ProductService: ProductService) {
  }

  getSubtotal(items: Product[]) {

    return this.ProductService.getSubtotal(items);
  }

  getTax(items: Product[]) {
    return this.ProductService.getTax(items);
  }

  getFinalPrice(items: Product[]) {
    return this.ProductService.getFinalPrice(items);
  }

  getTotalItems(items: Product[]) {
    return this.ProductService.getTotalItems(items);
  }

  delete(item) {
    const isConfirm = confirm('Xác nhận xóa bản ghi!');

    if (!isConfirm) {
      return;
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] === item) {
          const index = this.items.indexOf(item);
          if (index > -1) {
            this.items.splice(index, 1);
          }
        }
      }
    }
  }

  applyPromotionCode() {
    this.ProductService.applyPromotionCode();

  }

  ngOnInit(): void {
  }

}
