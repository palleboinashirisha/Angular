import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id:1, name:'watch', price:'120', color:'black', available:'Available', image:'/assets/products/watch.jpeg'},
    {id:2, name:'Hisence Ultra HD Smart Tv', price:'3339', color:'black', available:'Available', image:'/assets/products/tv.jpg'},
    {id:3, name:'Apple Iphone 12', price:'112000', color:'black', available:'Notavailable', image:'/assets/products/iphone.jpg'},
    {id:4, name:'LG Fully Automatic WAshing Machine', price:'70020', color:'white', available:'Available', image:'/assets/products/washingmachine.webp'},
    {id:5, name:'LG Refrigerator with door Cool', price:'21465', color:'white', available:'Notavailable', image:'/assets/products/refregirator.avif'},
    {id:6, name:'Dell inspiron one 27 ryzen 7', price:'76454', color:'white', available:'Available', image:'/assets/products/ryzen.jpg'}
  ]
}
