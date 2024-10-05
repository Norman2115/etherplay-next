import GameSection from "@/components/GameSection";
import ToolBar from "@/components/ToolBar";
import TopBar from "@/components/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopBar />
      <ToolBar />
      <GameSection />
    </>
  );
}
