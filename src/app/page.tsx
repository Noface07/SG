import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SignaturePiece } from "@/components/home/SignaturePiece";
import { CraftProcess } from "@/components/home/CraftProcess";
import { HeritageStory } from "@/components/home/HeritageStory";
import { BespokeTeaser } from "@/components/home/BespokeTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SignaturePiece />
      <CraftProcess />
      <HeritageStory />
      <BespokeTeaser />
    </>
  );
}
