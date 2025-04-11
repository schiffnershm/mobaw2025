import ProductService from "@/services/ProductService";
import ProductCard from "./ProductCard";

type ProductListProps = {
    categories: { [key: string]: boolean };
}

export default function ProductList({categories}: ProductListProps) {

    const activeCategories = Object.keys(categories).filter((category) => categories[category]);
    const filteredProducts = ProductService.getProductsByCategories(activeCategories);

    return (
        <section className="product-list">
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    imgSrc={product.imgSrc}
                    productName={product.name}
                    productPrice={product.price}
                />
            ))}
        </section>
    );
}