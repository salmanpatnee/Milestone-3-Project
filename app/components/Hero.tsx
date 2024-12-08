import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero-bg.jpg')] lg:pt-20 py-10 bg-cover bg-fixed bg-no-repeat lg:h-[600px]">
      <div className="wrapper">
        <div className="grid lg:grid-cols-2">
          {/* Empty Column for Layout Spacing */}
          <div></div>

          {/* Content Section */}
          <div className="rounded bg-[#FFF3E3] pt-16 pb-9 px-10">
            {/* Tagline for New Arrival */}
            <span className="font-semibold mb-1 text-text text-base tracking-[3px]">
              New Arrival
            </span>

            {/* Main Heading */}
            <h1 className="text-primary font-bold md:text-[52px] text-3xl sm:leading-[65px] mb-4">
              Discover Our <br />
              New Collection
            </h1>

            {/* Description Text */}
            <p className="font-medium text-lg text-text mb-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            {/* Call-to-Action Button */}
            <Link
              className="bg-primary text-white text-center py-6 text-base font-bold px-16 inline-block w-auto hover:bg-black transition-all"
              href="/shop"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
