import Image from "next/image";
export default function Essential() {
  return (
    <section className="m-4" >
      <div>
        <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-5">
        <Image width={300} height={300} alt="" src={"/images/ex1.png"} />
        <Image width={300} height={300} alt="" src={"/images/ex2.png"} />
        <Image width={300} height={300} alt="" src={"/images/ex3.png"} />
      </div>
      <div className='flex justify-evenly  flex-wrap  px-5 lg:px-36 pb-20 items-center mx-auto'>

<div className='ess-i px-2 w-[260px] mb-12 mt-10'>
    <span className='font-semibold  pl-3'>Icons</span> <br /> <br />
    <ul className='ess-ul'>
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
    </ul>


</div>

<div className='ess-i px-2 w-[260px] mb-12 mt-10' >
    <span className='font-semibold  pl-4'>Shoes</span> <br /> <br />
     <ul className='ess-ul '>
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
    </ul>
</div>



<div className='ess-i px-2 w-[260px] mb-12 mt-10'>
<span className='font-semibold  pl-3'>Clothing</span> <br /> <br />
     <ul className='ess-ul'>
        <li>All Clothing</li>
        <li>Modest Clothing</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
    </ul>
</div>


<div className='ess-i px-2 w-[260px] mb-12 mt-10'>
<span className='font-semibold pl-3'> {`Kids'`} </span> <br /> <br />
     <ul className='ess-ul'>
        <li>Infant & Toddler Shoes</li>
        <li>{`Kids'`} Shoes</li>
        <li>{`Kids'`} Jordan Shoes</li>
        <li>{`Kids'`} Basketball Shoes</li>
    </ul>
</div>

</div>
    </section>
  );
}