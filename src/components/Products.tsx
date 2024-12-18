"use client"
import ProductCard from "./Productcard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  color: string;
  Image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Nike Air Force 1 Mid \'07',
    category: 'Men\'s Shoes',
    price: '10,795.00',
    color: '1 Colour',
    Image: '/imges2/s1.png',
  },
  {
    id: 2,
    name: 'Nike Court Vision Low Next Nature',
    category: 'Men\'s Shoes',
    price: '4,895.00',
    color: '1 Colour',
    Image: '/imges2/s2.png',
  },
  {
    id: 3,
    name: 'Nike Air Force 1 PLATFORM',
    category: 'Women\'s Shoes',
    price: '18,695.00',
    color: '1 Colour',
    Image: '/imges2/s3.png',
  },
  {
    id: 4,
    name: 'Nike Air Force 1 React',
    category: 'Men\'s Shoes',
    price: '13,295.00',
    color: '1 Colour',
    Image: '/imges2/s4.png',
  },
  {
    id: 5,
    name: 'Air Jordan 1 Elevate Low',
    category: 'Women\'s Shoes',
    price: '11,895.00',
    color: '1 Colour',
    Image: '/imges2/s5.png',
  },
  {
    id: 6,
    name: 'Nike Standard Issue',
    category: 'Women\'s Basketball Jersey',
    price: '2,895.00',
    color: '1 Colour',
    Image: '/imges2/s6.png',
  },
  {
    id: 7,
    name: 'Nike Dunk Low Retro SE',
    category: 'Unisex Shoes',
    price: '9,695.00',
    color: '1 Colour',
    Image: '/imges2/s7.png',
  },
  {
    id: 8,
    name: 'Nike Dri-FIT UV HyperDry',
    category: 'Men\'s T-Shirt',
    price: '2,295.00',
    color: '1 Colour',
    Image: '/imges2/s8.png',
  },
  {
    id: 9,
    name: 'Nike Court Vision Low',
    category: 'Men\'s Shoes',
    price: '3,695.00',
    color: '1 Colour',
    Image: '/imges2/s9.png',
  },
  {
    id: 10,
    name: 'Nike Dri-FIT Ready',
    category: 'Men\'s Short-Sleeve Fitness Top',
    price: ' 3 395.00',
    color: '3 Colour',
    Image: '/imges2/s10.png',
  },
  {
    id: 11,
    name: 'Nike One Leak Protection: Period',
    category: 'Women\'Mid-Rise 18cm (approx.) Biker Shorts',
    price: '4,895.00',
    color: '2Colour',
    Image: '/imges2/s11.png',
  },
  {
    id: 12,
    name: 'Nike Air Force 1 LV8 3',
    category: 'Older Kids\ Shoe',
    price: '7 495.00',
    color: '1 Colour',
    Image: '/imges2/s12.png',
  },
  {
    id: 13,
    name: 'Nike Blazer Low Platform',
    category: 'Women\'s shoes',
    price: ' 8 195.00',
    color: '1 Colour',
    Image: '/imges2/s13.png',
  },
  {
    id: 14,
    name: 'Nike Air Force 1 07',
    category: 'Women\'s shoes',
    price: ' 8 195.00',
    color: '2 colour',
    Image: '/imges2/s14.png',
  },
  {
    id: 15,
    name: 'Nike Pro Dri-FIT',
    category: 'Men\'sTight-Fit Sleeveless Top',
    price: ' ₹ 1 495.00',
    color: '1 Colour',
    Image: '/imges2/s15.png',
  },
  {
    id:16 ,
    name: 'Nike Dunk Low Retro',
    category: 'Men\'s shoes',
    price: ' 8 695.00',
    color: '2 Colour',
    Image: '/imges2/s16.png',
  },
  {
    id: 17,
    name: 'Nike Air Max SC',
    category: 'Women\'s Shoes',
    price: ' 5 995.00',
    color: '2 Colour',
    Image: '/imges2/s17.png',
  },
  {
    id:18 ,
    name: 'Nike Dri-FIT UV Miler',
    category: 'Men\s short-sleeve Running Top',
    price: 'MRP : ₹ 1 695.00',
    color: '1 Colour',
    Image: '/imges2/s18.png',
  },
  {
    id: 19,
    name: 'Nike Air Max SYSTM',
    category: 'Older Kids Shoes',
    price: '6 495.0',
    color: '1 Colour',
    Image: '/imges2/s19.png',
  },
  {
    id: 20,
    name: 'Nike Alate All U',
    category: 'Women\s Light-Support Lightly Lined U-Neck Printed Sports Bra',
    price: '2 195.00',
    color: '1 Colour',
    Image: '/imges2/s20.png',
  },
  {
    id: 21,
    name: 'Nike Court Legacy Lift',
    category: 'Women\'s Shoes',
    price: '7 495.00',
    color: '2 Colour',
    Image: '/imges2/s21.png',
  },
  {
    id: 22,
    name: 'Nike Swoosh',
    category: 'Women\'s Medium-Upoort Padded Sports Bra Tank',
    price: '3 095.00',
    color: '2 Colour',
    Image: '/imges2/s22.png'
  },
  {
    id: 23,
    name: 'Nike Swoosh',
    category: 'Shoes',
    price: '8 595.00',
    color: '1 Colour',
    Image: '/imges2/s23.png',
  },
  {
    id: 24,
    name: 'Nike Dri-FIT Run Division Rise 365',
    category: 'Men\'s Running Tark',
    price: '3 495.00',
    color: '2 Colour',
    Image: '/imges2/s24.png',
  },
  {
    id: 25,
    name: 'Nike Dri-FIT Challenger',
    category: 'Men\'s 18cm (approx.)2-in-1 Versatile Shorts',
    price: '2 496.00',
    color: '1 Colour',
    Image: '/imges2/s25.png',
  },
  {
    id: 26,
    name: 'Jordan Series ES',
    category: 'Men\'s Shoes',
    price: '7 496.00',
    color: '2 Colour',
    Image: '/imges2/s26.png',
  },
  {
    id: 27,
    name: 'Nike Outdoor Play',
    category: 'Older Kids\'Oversized Women Jacket',
    price: '3 895.00',
    color: '1 Colour',
    Image: '/imges2/s27.png',
  },
  {
    id: 28,
    name: 'Nike Sportswear Trend',
    category: 'Older Kid\'s High-waised Woven Shorts',
    price: '2 495.00',
    color: '2 Colour',
    Image: '/imges2/s28.png',
  },
  {
    id: 29,
    name: 'Nike Blazer Low 77 Jumbo',
    category: 'Women\'s Shoes',
    price: '8 595.00',
    color: '1 Colour',
    Image: '/imges2/s29.png',
  },
  {
    id: 30,
    name: 'Nike SB Force 58',
    category: 'Skate Shoe',
    price: '5 995.00',
    color: '1 Colour',
    Image: '/imges2/s30.png',
  },
  
];

const ProductsPage: React.FC = () => {
  return (
    <div className="p-4 ">
      <div className="grid grid-cols-3 grid-rows-10 gap-3 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
     
    </div>
  );
};

export default ProductsPage;