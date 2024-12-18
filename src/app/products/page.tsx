import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import ProductsPage from "@/components/Products";
import { Button } from "@/components/ui/button";
import { BiRectangle } from "react-icons/bi";
export default function products() {
  return (
    <main className="my-20 max-w-[1300px] mx-auto flex gap-x-4 lg:gap-x-20">
      <section className="flex flex-col max-w-[200px]">
        <h1 className="font-semibold text-sm  md:text-2xl">New(500)</h1>
 
        <div className="font-semibold text-[15px] lg:text-md max-w-[150px] gap-3 mt-6 flex flex-col">
          <Link href={""}>Shoes</Link>
          <Link href={""}>Sports Bras</Link>
          <Link href={""}>Tops & T-Shirts</Link>
          <Link href={""}>Hoodies & Sweatshirts</Link>
          <Link href={""}>Jackets</Link>
          <Link href={""}>Trousers & Tights</Link>
          <Link href={""}>Shorts</Link>
          <Link href={""}>Tracksuits</Link>
          <Link href={""}>Jumpsuits & Rompers</Link>
          <Link href={""}>Skirts & Dresses</Link>
          <Link href={""}>Socks</Link>
          <Link href={""}>Accessories & Equipment</Link>

        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between items-center text-sm mt-1">
            Gender
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center font-semibold">
              <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
              Men
            </h1>
            <h1 className="flex gap-2 items-center font-semibold">
            <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
              Women
            </h1>
            <h1 className="flex gap-2 items-center font-semibold">
            <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
              Unisex
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between text-sm items-center mt-1">
          <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
            Kids
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center font-semibold">
            <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
              Boys
            </h1>
            <h1 className="flex gap-2 items-center font-semibold">
            <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
              Girls
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex text-[9px] lg:text-[12px] justify-between items-center mt-1">
          <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
            Sort By Price
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm ">
            <h1 className="flex gap-2 items-center font-semibold">
            <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
              Under ₹ 2 500.00
            </h1>
            <h1 className="flex gap-2 items-center font-semibold">
            <BiRectangle className=" w-[20px] h-[20px] rounded-xl"/>
             ₹ 2 501.00 - ₹ 7 500.00
            </h1>
          </div>
        </div>
      </section>
      <section className="max-w-[1000px] mx-auto overflow-clip">
        <div className="flex gap-4 ml-10 md:ml-[400px] lg:ml-[620px] xl:ml-[800px] overflow-clip">
          <h1 className="flex items-center gap-2 font-semibold text-sm">
            Hide Filters
            <span>
              <FiFilter size={14} />
            </span>
          </h1>
          <h2 className="flex items-center gap-2 font-semibold text-sm">
            Sort By
            <span>
              <RiArrowDropDownLine size={25} />
            </span>
          </h2>
        </div>
        <div className="mb-20">
          <ProductsPage/>
        </div>
        <hr />
        <section className="my-10">
          <h1 className="font-semibold text-xl">Related Categories</h1>
          <div className="space-x-2 space-y-2">
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              Best Selling Products
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              Best Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              New Basketball Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              New Football Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              New Men&apos;s Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              New Running Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              Best Men&apos;s Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              New Jordan Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              Best Women&apos;s Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none">
              Best Training & Gym
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}