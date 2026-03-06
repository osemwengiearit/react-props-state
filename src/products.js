import sneakers from "./assets/sneakers.jpg";
import headphones from "./assets/headphones.jpg";
import smartwatch from "./assets/smartwatch.jpg";
import backpack from "./assets/backpack.jpg";
import sunglasses from "./assets/sunglasses.jpg";
import laptop from "./assets/laptop.jpg";

const products = [
  {
    id: 1,
    name: "Running Sneakers",
    price: 79.99,
    category: "Footwear",
    image: sneakers,
    featured: true,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.99,
    category: "Electronics",
    image: headphones,
    featured: false,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image: smartwatch,
    featured: true,
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: 49.99,
    category: "Accessories",
    image: backpack,
    featured: false,
  },
  {
    id: 5,
    name: "Classic Sunglasses",
    price: 29.99,
    category: "Accessories",
    image: sunglasses,
    featured: false,
  },
  {
    id: 6,
    name: "Gaming Laptop",
    price: 999.99,
    category: "Electronics",
    image: laptop,
    featured: true,
  },
];

export default products;
