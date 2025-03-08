import { Akhir } from "@/components/Akhir";
import { Fitur1 } from "@/components/Fitur1";
import { Fitur2 } from "@/components/Fitur2";
import { Fitur3 } from "@/components/Fitur3";
import Footer1 from "@/components/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Testimoni } from "@/components/Testimoni";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <Hero />
        <Fitur1 />
        <Fitur2 />
        <Fitur3 />
        <Testimoni />
        <Akhir />
        <Footer1 />
      </div>
    </div>
  );
}