
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Bag Section */}
        <div className="w-full md:w-3/4 p-4">
          <h2 className="text-2xl font-bold mb-4">Bag</h2>
          {/* Item 1 */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center">
              <Image
                src="/images/grep1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={150}
                height={150}
                className="rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-[#757575]">Mens Short-Sleeve Running Top</p>
                <p className="text-[#757575]">Ashen Slate/Cobalt Bliss</p>
                <div className="flex gap-5 text-[#757575]">
                  <p>Size</p>
                  <p>L</p>
                  <p>Quantity</p>
                  <p>1</p>
                </div>
                <div className="mt-4 flex gap-4">
                  <HeartIcon />
                  <FaTrash />
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">MRP: ₹3,895.00</p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center justify-between border-b pb-[24px] mb-[24px] pt-[24px]">
            <div className="flex items-center">
              <div className="bg-white w-[150px] h-[150px]" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Nike Air Max 97 SE</h3>
                <p className="text-gray-600">Mens Shoes</p>
                <p className="text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                <div className="flex gap-5 text-[#757575]">
                  <p>Size</p>
                  <p>L</p>
                  <p>Quantity</p>
                  <p>1</p>
                </div>
                <div className="mt-4 flex gap-4">
                  <HeartIcon />
                  <FaTrash />
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">MRP: ₹16,995.00</p>
            </div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="w-full md:w-1/4 rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹20,890.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>₹20,890.00</span>
          </div>
          <button className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
