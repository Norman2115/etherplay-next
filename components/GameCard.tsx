import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  id: string;
  image: string;
  title: string;
  genre: Array<string>;
  price: string;
}

export default function GameCard({ id, image, title, genre, price }: GameCardProps) {
  return (
    <Link href={`/games/${id}`} passHref>
      <div className="w-72 h-full bg-white bg-opacity-20 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="relative w-full h-0 pb-[75%]">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        <div className="flex flex-col space-y-3 p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-white">{price}</p>
          <div className="flex flex-row flex-wrap items-center">
            {genre.map((g, i) => (
              <p
                key={i}
                className="text-sm text-white bg-gray-300 bg-opacity-20 rounded-md px-2 py-1 whitespace-nowrap mr-2 mb-2 last:mr-0"
              >
                {g}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
