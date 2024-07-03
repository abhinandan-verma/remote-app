import HeroSection from "@/components/hero-section";
import SearchSection from "@/components/search-section";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import TablePage from "../jobs/page";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <HeroSection />
       <Separator className="h-[100px]"/>
      <TablePage />
    </main>
  );
}
