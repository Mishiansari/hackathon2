
import { Button } from "@/components/ui/button";
export default function Featured() {
  return (
    <main className="m-4">
      <div>
        <h1 className="font-semibold text-xl py-5">Featured</h1>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/fea.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className=" text-[54px] leading-[60px] sm:text-3xl md:text-4xl  font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Button className="bg-[#111111] hover:bg-slate-600 hover:text-black text-white">Find Your Shoe</Button>
      </div>
    </main>
  );
}
