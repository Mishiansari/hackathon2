
import Image from "next/image";

export default function Essential() {
  return (
    <section className="m-4">
      <div>
        <h2 className="font-semibold text-xl py-5">The Essentials</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-5 md:gap-10">
        <Image
          width={300}
          height={300}
          alt=""
          src={"/images/ex1.png"}
          className="md:w-1/2 lg:w-1/3 xl:w-1/4"
        />
        <Image
          width={300}
          height={300}
          alt={""}
          src={"/images/ex2.png"}
          className="md:w-1/2 lg:w-1/3 xl:w-1/4"
        />
        <Image
          width={300}
          height={300}
          alt={""}
          src={"/images/ex3.png"}
          className="md:w-1/2 lg:w-1/3 xl:w-1/4"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center md:px-36 lg:px-48">
        <div className="ess-i px-2 w-[260px] mb-12 mt-10 md:mr-4 lg:mr-6 xl:mr-8">
          <span className="font-semibold pl-3">Icons</span>
          <br />
          <br />
          <ul >
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div className="ess-i px-2 w-[260px] mb-12 mt-10 md:ml-4 lg:ml-6 xl:ml-8">
          <span className="font-semibold pl-4">Shoes</span>
          <br />
          <br />
          <ul >
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div className="ess-i px-2 w-[260px] mb-12 mt-10 md:ml-4 lg:ml-6 xl:ml-8">
          <span className="font-semibold pl-3">Clothing</span>
          <br />
          <br />
          <ul >
            <li>All Clothing</li>
            <li>Modest Clothing</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        <div className="ess-i px-2 w-[260px] mb-12 mt-10 md:ml-4 lg:ml-6 xl:ml-8">
          <span className="font-semibold pl-3">{`Kid's`}</span>
          <br />
          <br />
          <ul>
            <li>Infant & Toddler Shoes</li>
            <li>{`Kid's`} Shoes</li>
            <li>{`Kid's`} Jordan Shoes</li>
            <li>{`Kid's`} Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


