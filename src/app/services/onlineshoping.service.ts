import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineshopingService {
  private products = [
    {
        "_id": "666b6998fc6eacc820782026",
        "p_id": 4,
        "p_name": "Sporty Digital Watch",
        "p_cost": 1299,
        "p_cat": "Sports Watch",
        "p_desc": "Digital watch with multiple features including stopwatch, alarm, and backlight.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/t/h/t/-original-imagrk9sstfxxhcd.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc82078203d",
        "p_id": 27,
        "p_name": "Fastrack Women's Watch",
        "p_cost": 2299,
        "p_cat": "Women's Watch",
        "p_desc": "Stylish Fastrack watch for women with a contemporary design and durable build.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/r/e/6/1-fv60037sm01w-fastrack-women-original-imahyps4ys8hvnrg.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc82078204b",
        "p_id": 41,
        "p_name": "Smartwatch",
        "p_cost": 2850,
        "p_cat": "Unisex",
        "p_desc": "A versatile smartwatch compatible with both Android and iOS platforms, featuring advanced fitness tracking.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/w/c/d/49-78-marv-raze-android-ios-beatxp-yes-original-imagsan7huzvegqv.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782051",
        "p_id": 47,
        "p_name": "Smartwatch",
        "p_cost": 1550,
        "p_cat": "Unisex",
        "p_desc": "A smartwatch that offers a range of health monitoring tools and seamless connectivity.",
        "p_img": "https://rukminim2.flixcart.com/image/20/20/xif0q/smartwatch/5/f/j/-original-imagp9vfjwxaurhw.jpeg?q=90"
    },
    {
        "_id": "666b6998fc6eacc820782045",
        "p_id": 35,
        "p_name": "Modern Digital Watch",
        "p_cost": 1750,
        "p_cat": "Unisex Watch",
        "p_desc": "Modern digital watch with a sleek design and multiple functions.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/t/s/0/-original-imagrk9qmdrgbz2f.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782058",
        "p_id": 54,
        "p_name": "Smartwatch",
        "p_cost": 3000,
        "p_cat": "Men's",
        "p_desc": "A premium smartwatch with a robust design and advanced fitness tracking capabilities.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/i/q/s/-original-imahywudy2cf26kh.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc82078202a",
        "p_id": 8,
        "p_name": "Analog Blue Watch",
        "p_cost": 650,
        "p_cat": "Men's Watch",
        "p_desc": "Stylish analog watch with a blue dial and a durable strap, perfect for casual wear.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/a/k/e/-original-imagnydrewxe5qeg.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782030",
        "p_id": 14,
        "p_name": "Digital Black Watch",
        "p_cost": 1099,
        "p_cat": "Men's Watch",
        "p_desc": "Digital watch with a sleek black design and multiple functions including alarm.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/q/n/n/-original-imagnvwuuk4karkd.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc82078205c",
        "p_id": 58,
        "p_name": "Smartwatch",
        "p_cost": 2500,
        "p_cat": "Women's",
        "p_desc": "An elegant smartwatch with a variety of fitness tracking features and smart notifications.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/d/u/-original-imagkqtunqgcjguh.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782042",
        "p_id": 32,
        "p_name": "Classic Brown Watch",
        "p_cost": 1000,
        "p_cat": "Men's Watch",
        "p_desc": "Classic brown watch with a traditional design and high-quality materials.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/l09w8sw0/watch/h/u/8/-original-imagc3ey42yzqszw.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782057",
        "p_id": 53,
        "p_name": "Smartwatch",
        "p_cost": 1650,
        "p_cat": "Unisex",
        "p_desc": "An all-in-one smartwatch with a sleek design and various health tracking features.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/9/z/z/-original-imagxp8tfbntmsgk.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782027",
        "p_id": 5,
        "p_name": "Classic Brown Leather Watch",
        "p_cost": 749,
        "p_cat": "Men's Watch",
        "p_desc": "Classic brown leather watch with an elegant design and durable build.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/9/m/k/-original-imagrk9rrpunfwvh.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782054",
        "p_id": 50,
        "p_name": "Smartwatch",
        "p_cost": 2700,
        "p_cat": "Unisex",
        "p_desc": "A premium smartwatch designed to provide an exceptional user experience with advanced features.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/a/k/r/-original-imagysbhge4gnnfz.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc820782059",
        "p_id": 55,
        "p_name": "Smartwatch",
        "p_cost": 1300,
        "p_cat": "Women's",
        "p_desc": "A stylish smartwatch that provides extensive fitness tracking and seamless connectivity.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/x/t/-original-imagzw97x6rscy3p.jpeg?q=70"
    },
    {
        "_id": "666b6998fc6eacc82078205b",
        "p_id": 57,
        "p_name": "Smartwatch",
        "p_cost": 2200,
        "p_cat": "Men's",
        "p_desc": "A feature-packed smartwatch that offers extensive fitness tracking and smart notifications.",
        "p_img": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/y/9/l/-original-imagxp8u2fgthyxy.jpeg?q=70"
    },
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.p_id === id);
  }

  addProduct(newProduct: any) {
    newProduct.p_id = this.products.length + 1;
    this.products.push(newProduct);
  }
}