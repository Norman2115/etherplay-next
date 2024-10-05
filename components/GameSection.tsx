import React from "react";
import GameCard from "./GameCard";
import { games } from "@/constants/game";

export default function GameSection() {
  return (
    <div className="flex justify-center items-center mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map(game => (
          <GameCard
            key={game.id}
            id={game.id}
            image={game.image}
            title={game.title}
            genre={game.genre}
            price={game.price}
          />
        ))}
      </div>
    </div>
  );
}
