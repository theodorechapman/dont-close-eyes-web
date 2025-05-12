
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface LaurelProps {
  imageUrl: string;
  altText: string;
}

const LaurelCarousel = ({ laurels }: { laurels: LaurelProps[] }) => {
  return (
    <div className="py-16 px-8">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">AWARDS & SELECTIONS</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {laurels.map((laurel, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="flex items-center justify-center p-2">
                    <img 
                      src={laurel.imageUrl} 
                      alt={laurel.altText} 
                      className="w-full h-auto max-h-64 object-contain"
                    />
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

export default LaurelCarousel;
