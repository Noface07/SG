import { PageHero } from '@/components/ui/PageHero';
import { HeritageStory } from '@/components/home/HeritageStory';
import { CraftProcess } from '@/components/home/CraftProcess';
import { BespokeTeaser } from '@/components/home/BespokeTeaser';

export const metadata = { title: 'Our Legacy | Sanwariya Gold' };

export default function HeritagePage() {
    return (
        <>
            <PageHero
                eyebrow="Chittorgarh · Rajasthan"
                title={<>The Legacy of <em className="italic font-light text-shimmer">Mewar</em></>}
                subtitle="Four generations of karigars, one unbroken chain of devotion."
            />
            <HeritageStory />
            <CraftProcess />
            <BespokeTeaser />
        </>
    );
}
