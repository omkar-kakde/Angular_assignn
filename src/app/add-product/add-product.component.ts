import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  loginform = new FormGroup({
    productName: new FormControl('',[Validators.required]),
    productPrice: new FormControl('',[Validators.required]),
    productUrl: new FormControl('',[Validators.required]),
   
  })

  @Output() dataEvent = new EventEmitter<string>();
  @Input() datas : string = "hiii"


  sendData() {
    const dataToSend = 'Hello from Sender!';
    this.dataEvent.emit(dataToSend);
  }


  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  get f(){
    return this.loginform.controls
  }

  productArray: any = [];
  
  
  productadd(){
    this.productArray.push(this.loginform.value);
  }
}
