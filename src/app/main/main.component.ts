import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isSidenavOpen = false;
  constructor() {

  }

  ngOnInit(): void {

  }

  

  productList = [
    {
      productName: "Product 1",
      productUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=c-d-x-PDX_a_82obo-unsplash.jpg",
      productPrice: 12
    },
    {
      productName: "Product 2",
      productUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
      productPrice: 6
    },
    {
      productName: "Product 3",
      productUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 18
    },
    {
      productName: "Product 4",
      productUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 18
    }
  ]



  shoppingList: any = []
  totalShoppingPrice: number = 0;
  addProduct(name: string, price: number) {
    if (this.shoppingList && Array.isArray(this.shoppingList)) {
      const isProductPresent = this.shoppingList.some(product => product.productName === name);
      if (isProductPresent) {
        const productIndex = this.shoppingList.findIndex(product => product.productName === name);
        this.shoppingList[productIndex].quantity++;
        this.shoppingList[productIndex].total = this.shoppingList[productIndex].total + price;
        this.totalShoppingPrice = this.totalShoppingPrice + price;
        console.log(this.shoppingList);
      } else {
        this.shoppingList.push({
          productName: name,
          productPrice: price,
          quantity: 1,
          total: price
        });
        this.totalShoppingPrice = this.totalShoppingPrice + price;
        console.log(this.shoppingList);
      }
    }
    else {
      this.shoppingList.push({
        productName: name,
        productPrice: price,
        quantity: 1,
        total: price
      });
      this.totalShoppingPrice = this.totalShoppingPrice + price;
      console.log(this.shoppingList);
    }
  }

  removeProdunct(name: string, price: number) {
    if (this.shoppingList && Array.isArray(this.shoppingList)) {
      const isProductPresent = this.shoppingList.some(product => product.productName === name);
      if (isProductPresent) {
        const productIndex = this.shoppingList.findIndex(product => product.productName === name);
        if (this.shoppingList[productIndex].quantity > 1) {
          this.shoppingList[productIndex].quantity--;
          this.shoppingList[productIndex].total = this.shoppingList[productIndex].total - price;
          this.totalShoppingPrice = this.totalShoppingPrice - price;
          console.log(this.shoppingList);
        }
        else {
          this.shoppingList.splice(productIndex, 1);
          this.totalShoppingPrice = this.totalShoppingPrice - price;
          console.log(this.shoppingList);
        }
      }
    }
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
