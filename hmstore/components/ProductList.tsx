import ProductCard from "./ProductCard";

export default function ProductList() {
    return (
        <section className="product-list">
            <ProductCard imgSrc="/images/leather-pants.jpg" productName="Wiesn Outfit" productPrice={19.99}/>
            <ProductCard imgSrc="/images/playstation.jpg" productName="Game Console" productPrice={499.99}/>
            <ProductCard imgSrc="/images/mixer.jpg" productName="The Fancy Supermix" productPrice={139.99}/>
        </section>
    );
}