// pages/help/payment-options/page.tsx

import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';

const help = () => {
  return (
    <div className="container mx-auto px-4 py-8">
   
      
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full max-w-md border p-2 rounded mt-4 mx-auto block"
        />
      </header>

    
      <div className='flex w-[2353px] h-[1042px] mt-[28px] ml-[28px]'>
      <div className=' faqs  px-5 lg:px-11'>
        
        <span className="text-2xl font-semibold my-6 uppercase text-center">
          WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
        </span>
        <p>
          We want to make buying your favourite Nike shoes and gear online fast
          and easy, and we accept the following payment options:
        </p>
        <ul className="px-7 lg:px-14">
          <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
          <li>Visa Electron, Maestro</li>
          <li>Apple Pay, PayTM</li>
        </ul>
        <p className='font-medium text-[16px] leading-[28px]'>
        Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join <br/>us today.
        </p>
        <div className='flex gap-5'>
        <Button className='bg-[#111111] hover:bg-gray-300 text-white hover:text-black'>JOIN US</Button>
        <Button  className='bg-[#111111] hover:bg-gray-300 text-white hover:text-black'>SHOP NIKE</Button>
        </div>
    

    
    
        <h3 className="text-xl font-semibold mb-4 mt-10">FAQs</h3>
        <div>
          <h4 className="font-bold text-[16px] leading-[28px] text-[#111111]">Does my card need international purchases enabled?</h4>
          <p className='font-normal text-[16px] leading-[28px] text-[#111111]'>
          Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout<br/> if international purchases need to be enabled.
          </p>
        </div>
        <p className='font-normal text-[15px] leading-[28px] mt-4'>
        Please note, some banks may charge a small transaction fee for international orders.
        </p>

        <div className="mt-4">
          <h4 className="font-bold text-[16px] leading-[28px] text-[#111111]">Can I pay for my order with multiple methods?</h4>
          <p className='font-normal text-[16px] leading-[28px] text-[#111111]'>No, payment for Nike orders can’t be split between multiple payment methods.</p>
        </div>

        <div className="mt-4">
          <h4 className="font-bold text-[16px] leading-[28px] text-[#111111]">What payment method is accepted for SNKRS orders?</h4>
          <p className='font-normal text-[16px] leading-[28px] text-[#111111]'>You can use any accepted credit card to pay for your SNKRS order.</p>
        </div>

        
        <div className="mt-4">
          <h4 className="font-bold text-[16px] leading-[28px] text-[#111111]">Why don't I see Apple Pay as an option?</h4>
          <p className='font-normal text-[16px] leading-[28px] text-[#111111]'>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest<br/> OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use<br/> Apple Pay on Nike.com.</p>
        </div>

        <div className='mt-4'>
          <h4 className='font-semibold text-[16px] leading-[28px] text-[#111111]'>Was this answer helpful?</h4>
          <div className='mt-4 flex'>
            <Image src="/imges2/like.png"
            alt="logo"
            width={30}
            height={30}
           
            
            />
             <Image src="/imges2/dislike.png"
            alt="logo"
            width={30}
            height={30}
           
            
            />
          </div>
          <p className='font-medium text-[16px] leading-[24px] text-[#757575] mt-4'>RELATED</p>
          <div className="mt-4">
          <h4 className="font-bold text-[16px] leading-[28px] text-[#111111] hover:underline">WHAT ARE NIKE'S DELIVERY OPTIONS?</h4>
          <p className='font-bold text-[16px] leading-[28px] text-[#111111] hover:underline '>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
        </div>
        </div>
        </div>
      


      <div className=' hidden lg:block w-[313px] ml-10 border-l border-gray-300 pl-6'>
      <h1 className='font-[Helvetica Neue] font-medium text-[28px] leading-[32px] text-center  ml-32'>CONTACT US</h1>

<div>
    <Image src="/imges2/mob.png"
    alt="mob-logo"
    width={64}
    height={64}
    className='mt-12 ml-48'
    />
    <p className='w-[263.15px] h-[112px] font-[helvetica Neue] font-normal text-[16px] leading-[28px] text-center ml-24 mt-6'>Products & Orders: 24 hours a day, 7 days a week
    Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
</div>
<div>
    <Image src="/imges2/message.png"
    alt="message"
    width={64}
    height={64}
    className='mt-12 ml-48'
    />
    <p className="text-[15px] font-medium leading-[24px] text-center ml-36 mt-6">24 hours a day</p>
    <p className='text-[15px] font-medium leading-[24px] text-center ml-36 mt-1'>7 days a week</p>
</div>
<div>
    <Image src="/imges2/mail.png"
    alt="email"
    width={64}
    height={64}
    className='mt-12 ml-48'
    />
    <p className="text-[15px] font-medium leading-[24px] text-center ml-36 mt-6">We'll reply within</p>
    <p className='text-[15px] font-medium leading-[24px] text-center ml-36 mt-1'>five business days</p>
</div>
<div>
    <Image src="/imges2/location.png"
    alt="address"
    width={64}
    height={64}
    className='mt-12 ml-48'
    />
    <p className="text-[15px] font-medium leading-[24px] text-center ml-36 mt-6">STORE LOCATOR</p>
    <p className='text-[15px] font-normal leading-[24px] text-center ml-36 mt-1'>Find Nike retail stores near you</p>
</div>
</div>
      </div>
  </div>
    
  );
};

export default help;