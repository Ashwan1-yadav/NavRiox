import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function AgencyWorkCarousel({ heading = "Our Work",
  items = [
    {
      id: "1",
      title: "SaaS Dashboard",
      summary: "High-performance analytics platform for enterprise teams.",
      url: "/projects/saas-dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      id: "2",
      title: "E-commerce Experience",
      summary: "Conversion-focused storefront with modern UX.",
      url: "/projects/ecommerce",
      image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    },
    {
      id: "3",
      title: "AI Platform UI",
      summary: "Design system and frontend for AI-driven workflows.",
      url: "/projects/ai-platform",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
  ], }) {
  const [api, setApi] = useState(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    return () => api.off("select", update);
  }, [api]);

  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-medium max-w-2xl">
            {heading}
            <span className="block text-white/50 text-base md:text-lg mt-4">
              A selection of digital products, platforms, and experiences we’ve crafted for ambitious brands.
            </span>
          </h2>

          <div className="flex gap-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className="rounded-full border-white/20 hover:bg-white/10">
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              className="rounded-full border-white/20 hover:bg-white/10">
              <ChevronRight />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel setApi={setApi} className="relative">
          <CarouselContent className="-ml-6">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-6 md:basis-[380px]">
                <Link to={item.url} className="group block h-[420px]">
                  <Card className="relative h-full bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">

                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <h3 className="text-xl font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-6 line-clamp-2">
                        {item.summary}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-white/80 group-hover:text-white transition">
                        View Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
