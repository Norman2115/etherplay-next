import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-col space-y-6 justify-center mt-32 max-w-6xl mx-auto">
        <h1 className="text-4xl text-center font-bold">Marketplace</h1>
        <div className="flex justify-center items-center">
          <button className="bg-white bg-opacity-20 text-lg px-9 py-3 rounded-md">
            Sell Game
          </button>
        </div>
        <div className="flex flex-col space-y-8 justify-center items-center bg-white bg-opacity-20 p-4 rounded-lg">
          <div className="grid grid-cols-5 gap-6">
            <div className="flex items-center">
              <p className="text-lg truncate">
                0x82c17c9d2434BFD6b7f429A744a1E7968B88C87F
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/sekiro-square.jpg"
                alt="NFT"
                width={32}
                height={32}
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">Sekiro</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">$122</p>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-white bg-opacity-20 text-base px-5 py-2 rounded-full">
                Buy
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6">
            <div className="flex items-center">
              <p className="text-lg truncate">
                0x82c17c9d2434BFD6b7f429A744a1E7968B88C87F
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/elden-ring-square.jpg"
                alt="NFT"
                width={32}
                height={32}
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">Elden Ring</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">$159</p>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-white bg-opacity-20 text-base px-5 py-2 rounded-full">
                Buy
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6">
            <div className="flex items-center">
              <p className="text-lg truncate">
                0x82c17c9d2434BFD6b7f429A744a1E7968B88C87F
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/rdr2-square.jpg"
                alt="NFT"
                width={32}
                height={32}
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">RDR2</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">$209</p>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-white bg-opacity-20 text-base px-5 py-2 rounded-full">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
