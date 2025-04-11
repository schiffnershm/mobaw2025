const ProductService = {
    products: [
      { id: 1, name: "Laptop", price: 200, imgSrc: "/images/leather-pants.jpg", category: "electronics" },
      { id: 2, name: "T-Shirt", price: 200, imgSrc: "/images/playstation.jpg", category: "clothing" },
      { id: 3, name: "Book - JavaScript Guide", price: 200, imgSrc: "/images/mixer.jpg", category: "home" },
      { id: 4, name: "Sofa", price: 200, imgSrc: "/images/playstation.jpg", category: "home" },
      { id: 5, name: "Headphones", price: 200, imgSrc: "/images/mixer.jpg", category: "electronics" },
      { id: 6, name: "Jeans", price: 200, imgSrc: "/images/leather-pants.jpg", category: "clothing" },
    ],
  
    getProductsByCategories(selectedCategories: string[]): Product[] {
      const filteredProducts = this.products.filter(product => selectedCategories.includes(product.category));
      return filteredProducts;
    }
  };
  
  export default ProductService;