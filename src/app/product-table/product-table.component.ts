import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @Input() shoppingList: any;
  @Input() totalShoppingPrice: number = 0;

  constructor() {

  }
  ngOnInit(): void {
  }

  removeEntireProduct(name: string, price: number) {
    if (this.shoppingList && Array.isArray(this.shoppingList)) {
      const isProductPresent = this.shoppingList.some(product => product.productName === name);
      if (isProductPresent) {
        const productIndex = this.shoppingList.findIndex(product => product.productName === name);
        this.totalShoppingPrice = this.totalShoppingPrice - price;
        this.shoppingList.splice(productIndex, 1);
      }
    }
  }

}
