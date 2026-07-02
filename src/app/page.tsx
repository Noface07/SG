import { Preloader } from "@/components/home/v2/Preloader";
import { HeroCinematic } from "@/components/home/v2/HeroCinematic";
import { GoldMarquee } from "@/components/home/v2/GoldMarquee";
import { CollectionsShowcase } from "@/components/home/v2/CollectionsShowcase";
import { CraftNumbers } from "@/components/home/v2/CraftNumbers";
import { RoyalEditorial } from "@/components/home/v2/RoyalEditorial";
import { BlessingQuote } from "@/components/home/v2/BlessingQuote";
import { FinaleCTA } from "@/components/home/v2/FinaleCTA";

export default function Home() {
  return (
    <>
      <Preloader />
      <HeroCinematic />
      <GoldMarquee />
      <CollectionsShowcase />
      <CraftNumbers />
      <RoyalEditorial />
      <BlessingQuote />
      <FinaleCTA />
    </>
  );
}
