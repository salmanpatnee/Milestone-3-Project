import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MiniCart = () => {
  return (
    <Popover open={false}>
      <PopoverTrigger className="group">
        <ShoppingCart
          size={32}
          className="stroke-current text-black transition-colors group-hover:stroke-primary"
        />
      </PopoverTrigger>

      {/* Popover Content (Shopping Cart Summary) */}
      <PopoverContent className="rounded-none white w-96 py-7 px-8">
        <h4 className="font-semibold text-xl border-b border-[#D9D9D9] pb-7 mb-10">
          Shopping Cart
        </h4>

        {/* Cart Item 1 */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <Image
              src="/images/cart-item-1.png"
              alt="Sofa"
              width={111}
              height={90}
              className="rounded-lg bg-[#efe6d1]"
            />
          </div>
          <div>
            <p className="text-base mb-2">Asgaard Sofa</p>
            <p className="flex space-x-4 items-center">
              <span className="font-light text-base">1</span>
              <span className="font-light text-base">X</span>
              <span className="font-medium text-primary text-xs">
                Rs. 250,000.00
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/images/icons/close.png"
              width={20}
              height={20}
              alt="Close"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Cart Item 2 */}
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="/images/cart-item-1.png"
              alt="Sofa"
              width={111}
              height={90}
              className="rounded-lg bg-[#efe6d1]"
            />
          </div>
          <div>
            <p className="text-base mb-2">Asgaard Sofa</p>
            <p className="flex space-x-4 items-center">
              <span className="font-light text-base">1</span>
              <span className="font-light text-base">X</span>
              <span className="font-medium text-primary text-xs">
                Rs. 250,000.00
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/images/icons/close.png"
              width={20}
              height={20}
              alt="Close"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Cart Summary */}
        <div className="mt-20 flex text-base justify-between border-b border-[#D9D9D9] pb-6">
          <p>Subtotal</p>
          <p className="text-primary font-medium">Rs. 520,000.00</p>
        </div>

        {/* Cart Actions */}
        <div className="flex items-center justify-between pt-7 space-x-2">
          <Link
            href="/cart"
            className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors"
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors"
          >
            Checkout
          </Link>
          <Link
            href="/cart"
            className="border rounded-2xl text-xs py-2 px-6 hover:bg-primary hover:text-white transition-colors"
          >
            Comparison
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MiniCart;
