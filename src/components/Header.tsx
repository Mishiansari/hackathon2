
import { HeartIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      {/* Top bar */}
      <div className="bg-[#fafafa] border-b flex justify-between items-center px-10 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium">
        <Image src="/images/logo.png" alt="logo" width={19.2} height={24} />
        <div></div>
        <div className="flex md:gap-4 sm:gap-3 gap-2 text-black font-semibold hover:text-blue-800">
          <Link href="/location" className="hover:bg-blue-200">
            Find Link Store
          </Link>
          <p>|</p>
          <Link href="/help" className="hover:bg-blue-200">
            Help
          </Link>
          <p>|</p>
          <Link href="/joinus" className="hover:bg-blue-200">
            Join Us
          </Link>
          <p>|</p>
          <Link href="/sign-up" className="hover:bg-blue-200">
            Sign In
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Image src="/images/logo2.png" alt="Nike Logo" width={58.85} height={20.54} />
        </div>
        <nav className="flex gap-4 md:gap-6 text-black font-semibold md:text-[16px] sm:text-[14px] text-[10px]">
          <Link href="/products" className="hover:bg-gray-300 text-black whitespace-nowrap">
            New & Featured
          </Link>
          <Link href="/men" className="hover:bg-gray-300 text-black whitespace-nowrap">
            Men
          </Link>
          <Link href="#" className="hover:bg-gray-300 text-black whitespace-nowrap">
            Women
          </Link>
          <Link href="#" className="hover:bg-gray-300 text-black whitespace-nowrap">
            Kids
          </Link>
          <Link href="#" className="hover:bg-gray-300 text-black whitespace-nowrap">
            Sale
          </Link>
          <Link href="#" className="hover:bg-gray-300 text-black whitespace-nowrap">
            SNKRS
          </Link>
        </nav>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <SearchIcon className="absolute right-3 top-2.5 text-gray-900" />
          </div>
          <HeartIcon
            className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer"
          />
          <ShoppingBagIcon
            className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer"
          />
        </div>
      </div>

      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <SearchIcon className="absolute right-3 top-2.5 text-gray-900" />
        </div>
      </div>
    </header>
  );
}


