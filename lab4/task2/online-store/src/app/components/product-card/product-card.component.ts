import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  mainImage!: string;
  currentIndex = 0; 

  ngOnInit() {
    this.mainImage = this.product.image;
  }

  selectImage(index: number) {
  if (index === -1) {
    this.mainImage = this.product.image;
  } else {
    this.mainImage = this.product.images[index];
  }
  this.currentIndex = index;
}

  stars(): boolean[] {
    
    const fullStars = Math.round(this.product.rating);
    return Array(5).fill(false).map((_, i) => i < fullStars);
  }

  encode(str: string) {
  
    return encodeURIComponent(str);
  }
}
