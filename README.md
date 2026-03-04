# Product Catalog – Interactive Version

This project extends the Lesson 2 Product Catalog by adding interactivity using React state.

## Concepts Demonstrated

- Props vs State
- useState hook
- Conditional rendering (ternary and &&)
- Dynamic CSS in JS
- Controlled inputs
- Lifting state up
- Array updates using spread operator

## Features Implemented

### 1. Add to Cart Toggle

Each product has a button that toggles between:

- Add to Cart
- Remove from Cart

### 2. Cart Count in Navbar

The total number of products in the cart is tracked in App.jsx and displayed in the header.

### 3. Quantity Selector

When a product is added to cart:

- "+" increases quantity
- "-" decreases quantity
- Quantity controls only show when product is in cart

### 4. Dynamic Product Highlight

Products in cart have a colored border using dynamic inline styles.

### 5. Search Functionality

A controlled input filters products by name in real time.

## Image Sources

Product images were downloaded from:
https://unsplash.com

Search terms used:

- sneakers
- headphones
- smartwatch
- backpack
- sunglasses
- laptop

Images are stored locally in `src/assets`.

## How to Run

```bash
npm install
npm run dev
```

## Author

Arit Bright Osemwengie
