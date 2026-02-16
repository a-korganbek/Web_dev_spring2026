import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro 128GB',
    description: 'Смартфон Apple iPhone 14 Pro 128Gb серебристый',
    price: 499000,
    rating: 5,
    image: 'https://basket-09.wbbasket.ru/vol1247/part124724/124724823/images/big/1.webp',
    images: [
      //'https://basket-09.wbbasket.ru/vol1247/part124724/124724823/images/big/1.webp',
      'https://resources.cdn-kaspi.kz/img/m/p/h00/hc1/64503553949726.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8b/hd5/64503556571166.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/h50/64503557652510.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-serebristyi-106363274/?srsltid=AfmBOormazCjrMVTL6Brnn9SJlvoRexuq3B_-feRCII-UERXb57UhSdC'
  },
  {
    id: 2,
    name: 'Распашной шкаф',
    description: 'Fourdoor, 160x200х47 см, белый',
    price: 84998 ,
    rating: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h59/67189057028126.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8a/h46/67189057552414.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3f/h22/67189058076702.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8c/hb1/85996739199006.png?format=gallery-medium'
    ],
    link: 'https://l.kaspi.kz/shop/8JookpZUvLkX9YA'
  },
  {
    id: 3,
    name: 'Смартфон Samsung',
    description: 'Galaxy S24 FE 5G 8 ГБ/128 ГБ черный',
    price: 265000,
    rating: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pfe/p76/1610320.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pdb/p79/1610315.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p67/p7a/1610310.png?format=gallery-medium'
    ],
    link: 'https://l.kaspi.kz/shop/5hVAHBvhp1A9TRq'
  },
  {
    id: 4,
    name: 'iPhone Air',
    description: 'Смартфон Apple iPhone Air 256Gb белый',
    price: 576000,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p21/64170900.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pab/p0f/64477542.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd6/p21/64170902.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf2/p21/64170903.png?format=gallery-large'
    ],
    link:'https://l.kaspi.kz/shop/2ccfUmNaFJgBtYc',
  },
  {
  
    id: 5,
    name: 'Смартфон Apple',
    description: 'Смартфон Apple iPhone 16 Pro 128Gb Dual eSim золотистый',
    price: 680000,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8a/87310437154846.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h3a/h49/87310437220382.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/he3/87310437285918.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h48/87310437351454.jpg?format=gallery-medium'
    ],
    link: 'https://l.kaspi.kz/shop/HiNbSMxXC8xedWP',
  },
  {
    id: 6,
    name: 'iPhone 15',
    description: 'Смартфон Apple iPhone 15 256Gb черный',
    price: 455000,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h44/he4/83559338672158.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/h0b/83559328448542.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5b/hca/83559328514078.jpg?format=gallery-large'
    ],
    link: 'https://l.kaspi.kz/shop/EeELjgBiGHRXtXM'
  },
  {
    id: 7,
    name: 'iPhone 15 Pro Max',
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb Dual eSim белый',
    price:750000,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/ha9/86596771610654.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h25/hdb/86596771676190.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h32/86596771872798.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcc/h09/86596771807262.jpg?format=gallery-medium',
    ],
    link: 'https://l.kaspi.kz/shop/GUyWbd2wB3JzWQu'
  },
  {
    id: 8,
    name: 'iPhone 15 Pro',
    description: 'Максимальная версия iPhone 14 Pro с 512ГБ памяти и улучшенной камерой.',
    price: 1200000,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9b/h62/86319883485214.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h80/h16/86319883583518.jpg?format=gallery-medium'
    ],
    link: 'https://l.kaspi.kz/shop/9hLMUYJR1iGSaR9'
  },
  {
    id: 9,
    name: 'Ноутбук ASUS',
    description: 'Ноутбук ASUS Zenbook 14 OLED 14" / 16 Гб / SSD 1000 Гб / Win 11 / UX3405CA-PP448W / 90NB14W2-M00LR0',
    price: 700000,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/p6b/25986296.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p92/p6b/25986297.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p76/p6b/25986298.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p26/p21/25986301.jpg?format=gallery-medium'
    ],
    link: 'https://l.kaspi.kz/shop/HbECwFThTktRH7s'
  },
  {
    id: 10,
    name: 'Робот-пылесос',
    description: 'Робот-пылесос DREAME X40 Ultra Complete RLX63CE-2 белый',
    price: 400000,
    rating: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p55/56757212.jpg?format=gallery-medium',
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p55/56757214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p14/p56/56757217.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p58/56757222.jpg?format=gallery-medium',
    ],
    link: 'https://l.kaspi.kz/shop/BmrMLfssR16FTRW'
  }
];

}

