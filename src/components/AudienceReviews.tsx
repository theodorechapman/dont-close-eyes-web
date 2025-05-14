
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewProps {
  quote: string;
}

const AudienceReviews = ({ reviews }: { reviews: ReviewProps[] }) => {
  const [api, setApi] = useState<any>(null);
  
  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="py-16 container mx-auto px-8 max-w-6xl bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black text-center uppercase">OUR AUDIENCES</h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-4">
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-xl text-center italic font-medium text-black normal-case">"{review.quote}"</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2" />
          <CarouselNext className="relative static ml-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default AudienceReviews;
