import { ChevronRight, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import Features from "../components/Features";
import InputGroup from "../components/Input";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CheckoutPage = () => {
  return (
    <div>
      <header className='text-center py-28 bg-[url("/images/banners/shop.png")] bg-cover bg-fixed bg-no-repeat bg-left'>
        <Image
          src="/images/furniro-icon.png"
          width={70}
          height={70}
          alt="Furniro"
          className="mx-auto"
        />
        <h1 className="font-medium text-5xl mb-4">Checkout</h1>
        <nav className="flex justify-center">
          <ul className="flex items-center space-x-2 font-medium text-base">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            <li className="font-light">Checkout</li>
          </ul>
        </nav>
      </header>

      <section className="wrapper lg:py-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-6 p-2">
            <h2 className="font-semibold text-4xl mb-9">Billing details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <InputGroup label="First Name" />
              </div>
              <div>
                <InputGroup label="Last Name" />
              </div>
            </div>
            <div className="grid">
              <div>
                <InputGroup label="Company Name (Optional)" />
              </div>
            </div>

            <div className="grid">
              <div className="mb-8">
                <label className="font-medium text-base mb-2 block text-gray-700">
                  Country / Region
                </label>
                <select className="rounded-sm h-[75px] border border-[#9F9F9F] w-full px-4">
                  <option value="" selected>
                    Pakistan
                  </option>
                  <option value="">Dubai</option>
                </select>
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup label="Street address" />
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup label="Town / City" />
              </div>
            </div>

            <div className="grid">
              <div className="mb-8">
                <label className="font-medium text-base mb-2 block text-gray-700">
                  Province
                </label>
                <select className="rounded-sm h-[75px] border border-[#9F9F9F] w-full px-4">
                  <option value="" selected>
                    Sindh
                  </option>
                  <option value="">Punjab</option>
                </select>
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup label="ZIP code" />
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup label="Phone" type="tel" />
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup label="Email address" type="email" />
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup label="" placeholder="Additional information" />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-6 p-2">
            <section className="lg:py-10 py-0 px-4">
              <div className="overflow-x-auto border-b border-[#D9D9D9] pb-8 mb-5">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="text-left text-black font-medium text-2xl py-3 px-4 ">
                        Product
                      </th>
                      <th className="text-right text-black font-medium text-2xl py-3 px-4">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100 text-base">
                      <td className="py-3 px-4 text-[#9F9F9F] ">
                        Asgaard sofa
                      </td>
                      <td className="py-3 px-4 text-gray-700 font-light text-right">
                        Rs. 250,000
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 text-base">
                      <td className="py-3 px-4 ">Subtotal</td>
                      <td className="py-3 px-4 font-light text-right">
                        Rs. 250,000
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 text-base">
                      <td className="py-3 px-4 ">Total</td>
                      <td className="py-3 px-4 text-right text-primary font-bold lg:text-2xl text-xl">
                        Rs. 250,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="payment-method">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="flex flex-row-reverse justify-end gap-4 border-none text-base text-[#9F9F9F]">
                      Direct Bank Transfer
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light text-[#9F9F9F]">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger className="flex flex-row-reverse justify-end gap-4 border-none text-base text-[#9F9F9F]">
                      Direct Bank Transfer
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light text-[#9F9F9F]">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="flex flex-row-reverse justify-end gap-4 border-none text-base text-[#9F9F9F]">
                      Cash On Delivery
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light text-[#9F9F9F]">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <p className="text-base mt-6 font-light">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="" className="font-bold">
                  privacy policy
                </a>
                .
              </p>
              <div className="text-center mt-10">
                <button className="bg-transparent text-black border border-black rounded-lg h-12 lg:h-14 px-8 lg:px-16 text-sm lg:text-base hover:bg-primary hover:text-white hover:border-primary transition">
                Place order
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Features />
    </div>
  );
};

export default CheckoutPage;
