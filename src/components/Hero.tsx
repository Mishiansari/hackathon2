import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Hero(){
    return(
        <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4 ">
            <div className="flex justify-center flex-col items-center pb-4">
            <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
         <p className="text-sm text-gray-600" >
         <span>Download the app to access everything Nike.</span>{" "}
           <Link href={"/"}> Get Your Great</Link>
        </p>
            </div>
            <Image src="/images/hero image.jpg" alt="shoes" width={1344} height={700}/>
            <div className="flex justify-center items-center flex-col p-10 text-center
            ">
                <p className="text-sm">First Look</p>
                <h2 className=" text-[56px] leading-[60px] sm:text-3xl md:4xl text-[#111111] font-bold uppercase">Nike Air Max Pulse</h2>
                <p  className="text-sm leading-5 w-full pt-3 pb-2 text-center
                lg:w-[60%]">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
                <div className="flex justify-center items-center gap-3"><Button className="bg-black text-white rounded-xl">Notify Me</Button>
                <Button className="bg-[#111111] text-white rounded-xl hover:bg-slate-600 hover:text-black">Shop Air Max</Button></div>
            </div>
        </section>
    )
    
}