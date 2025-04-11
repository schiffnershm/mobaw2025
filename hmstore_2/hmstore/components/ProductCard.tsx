import Image from 'next/image';

interface ProductCardProps {
    imgSrc: string;
    imgWidth?: number;
    imgHeight?: number;
    imgAltText?: string;
    productName: string;
    productPrice: number;
}

export default function ProductCard({ imgSrc, imgWidth=150, imgHeight=120, 
                                      imgAltText='Product', productName, 
                                      productPrice }: ProductCardProps) {
    return (
        <article className="product">
            <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAltText}/>            
            <h3>{productName}</h3>
            <p>${productPrice}</p>
            <button>Add to Cart</button>
        </article>
    );
}