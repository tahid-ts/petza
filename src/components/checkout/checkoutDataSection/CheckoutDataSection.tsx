import Title from "@/components/ui/title/Title";
import Image from "next/image";
import React from "react";

const CheckoutDataSection = () => {
  const cartItems = [
    {
      id: 1,
      name: "American Pit Bull Terrier Dog Belt",
      quantity: 1,
      price: 260.0,
      image: "/img/checkout/product-thumb1_1.png",
    },
    {
      id: 2,
      name: "American Pit Bull Terrier Dog Belt",
      quantity: 1,
      price: 260.0,
      image: "/img/checkout/product-thumb1_2.png",
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountOnMRP = 0;
  const deliveryCharge = 20.0;
  const totalAmount = subtotal - discountOnMRP + deliveryCharge;
  return (
    <div className="max-w-full">
      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full rounded-lg"
          >
            <div className="flex items-center gap-4">
              {/* Product Image */}
              <div className="w-24 h-24 bg-bg-color-two rounded-lg flex items-center justify-center overflow-hidden">
                <div className="w-16 h-16 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div>
                <Title align="left" className="md:text-xl text-sm font-bold">
                  {item.name}
                </Title>
                <Title align="left" className="md:text-xl text-sm font-bold">
                  <span className="font-semibold md:text-xl text-sm">
                    Quantity :
                  </span>{" "}
                  {item.quantity}
                </Title>
              </div>
            </div>

            {/* Price */}
            <div className="md:text-2xl text-sm font-bold text-gray-800 font-title ">
              ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6"></div>

      {/* Price Details */}
      <div className="mb-6 w-full ">
        <div className="space-y-4 ">
          <Title align="right" size="2xl" className="md:ml-48 font-bold">
            Price Details ({cartItems.length} Items)
          </Title>
          {/* Subtotal */}
          <div className="flex flex-col justify-end items-end text-dark font-title test-base ">
            <div className=" md:w-1/2 w-3/4 flex justify-between items-center">
              <span className="text-lg text-gray-700">Subtotal</span>
              <span className="text-lg text-gray-800">
                $ {subtotal.toFixed(2)}
              </span>
            </div>
            <div className="md:w-1/2 w-3/4  flex justify-between items-center">
              <span className="text-lg text-gray-700">Discount On MRP</span>
              <span className="text-lg text-gray-800">{discountOnMRP}</span>
            </div>

            {/* Coupon Discount */}
            <div className="md:w-1/2 w-3/4  flex justify-between items-center">
              <span className="text-lg text-gray-700">Coupon Discount</span>
              <button className="text-lg text-orange-500 hover:text-orange-600 font-normal">
                Apply Coupon
              </button>
            </div>

            {/* Delivery Charge */}
            <div className="md:w-1/2 w-3/4  flex justify-between items-center">
              <span className="text-lg text-gray-700">Delivery Charge</span>
              <span className="text-lg text-gray-800">
                $ {deliveryCharge.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Discount on MRP */}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6"></div>

      {/* Total Amount */}
      <div className="flex justify-between items-center text-dark font-title font-semibold">
        <h2 className="md:text-3xl text-2xl font-bold text-gray-900">
          Total Amount
        </h2>
        <span className="md:text-3xl text-2xl font-bold  text-gray-900">
          $ {totalAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CheckoutDataSection;
