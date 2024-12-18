"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4 md:m-10 lg:m-16">
      <div className="flex justify-center flex-col items-center pb-4 md:pb-10 lg:pb-16">
        <h3 className="text-xl text-black font-bold md:text-2xl lg:text-3xl">
          Hello Nike App
        </h3>
        <p className="text-sm text-gray-600 md:text-base lg:text-lg">
          <span>Download the app to access everything Nike.</span>{" "}
          <Link href={"/"}>Get Your Great</Link>
        </p>
      </div>
      <Image
        src="/images/hero image.jpg"
        alt="shoes"
        width={1344}
        height={700}
        className="md:w-full lg:w-3/4 xl:w-2/3"
      />
      <div className="flex justify-center items-center flex-col p-10 md:p-16 lg:p-20 text-center">
        <p className="text-sm md:text-base lg:text-lg">First Look</p>
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
          Nike Air Max Pulse
        </h2>
        <p className="text-sm leading-5 w-full md:w-3/4 lg:w-2/3 pt-3 pb-2 text-center">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>
        <div className="flex justify-center items-center gap-3 md:gap-4 lg:gap-6">
          <Button
            className="bg-black text-white rounded-xl md:px-4 lg:px-6"
            onClick={() => console.log("Notify Me")}
          >
            Notify Me
          </Button>
          <Button
            className="bg-[#111111] text-white rounded-xl hover:bg-slate-600 hover:text-black md:px-4 lg:px-6"
            onClick={() => console.log("Shop Air Max")}
          >
            Shop Air Max
          </Button>
        </div>
      </div>
    </section>
  );
}


