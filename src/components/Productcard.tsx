'use client'
import Image from "next/image";
interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    color: string;
    Image: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div className="flex flex-wrap  hover:bg-slate-300">
        <Image
          src={product.Image}
          alt={product.name}
          
          className="w-[660px] "
        />
        <div>
        <h4 className="font-semibold text-[#9E3500] text-sm">Just In</h4>
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-[#757575]">{product.category}</p>
        <p className="text-[#111111] font-bold mt-2">MRP: ₹ {product.price}</p>
        <p className="text-[#757575] text-sm">{product.color}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;