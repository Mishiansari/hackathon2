import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Dont = () => {
  return (
    <div className="container mx-auto p-4 md:p-10 lg:p-16">
      <div className="mt-28 mb-7 ">
        <span className="font-semibold text-xl py-5">{`Don't`}</span>
      </div>
      <div className="flex justify-center">
        <Image
          className="md:w-1/2 lg:w-2/3 xl:w-3/4"
          src="/images/dnt1.png"
          alt="banner"
          width={1200}
          height={600}
        />
      </div>
      <div className="text-center text-black mt-16 md:text-center">
        <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
          flight essentials
        </span>
        <br />
        <br />
        <span>
          Your built-to-last, all-week wears—but with style only Jordan Brand can
          deliver.
        </span>
        <br />
        <Button
          className="bg-[#111111] text-white hover:bg-slate-200 hover:text-black mt-4 md:ml-4 lg:ml-6"
        >
          shop
        </Button>
      </div>
    </div>
  );
};

export default Dont;


