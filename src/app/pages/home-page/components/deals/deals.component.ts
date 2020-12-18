import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  dealsList = [
    {
      imgPath: '../../../../../assets/f1.jpeg',
      name: 'Bata,Chevit,Density',
      price: 'Under Rs.799',
      description: "Best Selling Men's Footwear",
    },
    {
      imgPath: '../../../../../assets/f2.jpeg',
      name: 'Wooland,Red Tape,Red Chief',
      price: 'Min. 40% Off',
      description: "Men's Causal Shoes,Sandals",
    },
    {
      imgPath: '../../../../../assets/f3.jpeg',
      name: 'Reebok,FILA & more',
      price: 'Min. 50% Off',
      description: "Men's Sports Shoes..",
    },
    {
      imgPath: '../../../../../assets/f4.jpeg',
      name: 'Festive Sarees',
      price: 'Min. 70% Off',
      description: 'Saara,Divastri, & More',
    },
    {
      imgPath: '../../../../../assets/f5.jpeg',
      name: 'Libas,Vishudh & more',
      price: '60-70% Off',
      description: 'Best Discounts on Brands!',
    },
    {
      imgPath: '../../../../../assets/f6.jpg',
      name: 'Puma,Allen Solly & more',
      price: 'From Rs.299 + Extra10%Off',
      description: 'Best Discounts on Brands!',
    },
    {
      imgPath: '../../../../../assets/f7.jpeg',
      name: 'Peter England, US Polo, Levis',
      price: 'From Rs.499',
      description: 'Shrits,Trousers,Blazers',
    },
    {
      imgPath: '../../../../../assets/f8.jpeg',
      name: 'Levis,Allen Solly,US Polo',
      price: '55-80% Off',
      description: 'Shirts,Trousers,Blazers',
    },
  ];
}
