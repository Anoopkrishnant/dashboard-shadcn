'use client';

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const vehicleCards = [
  {
    name: "Lamborgini Urus",
    status: "Active",
    plate: "CA01EX1",
    image: "/images/urus.png",
  },
  {
    name: "Land Rover Defender",
    status: "In Service",
    plate: "CA02EX2",
    image: "/images/defender.png",
  },
  {
    name: "Mahindra Be6",
    status: "Active",
    plate: "CA03EX3",
    image: "/images/be6.png",
  },
];

export function VehicleCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="w-full max-w-s mx-auto">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full overflow-hidden"
      >
        <CarouselContent
          className="cursor-grab"
          onScroll={(e) => {
            const scrollLeft = e.currentTarget.scrollLeft;
            const width = e.currentTarget.offsetWidth;
            const newIndex = Math.round(scrollLeft / width);
            setActiveIndex(newIndex);
          }}
        >
          {vehicleCards.map((car, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="p-1">
                <Card className="rounded-lg shadow-md">
                  <CardHeader>
                  <CardTitle>Garage</CardTitle>
                     <CardDescription>Your vehicles</CardDescription>
                     </CardHeader>
                  <CardContent className="flex-1 pb-4">
                    <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <p className="text-md text-muted-foreground">Plate: {car.plate}</p>
                    <p
                      className={`text-md ${
                        car.status === "Active" ? "text-green-500" : "text-yellow-500"
                      }`}
                    >
                      {car.status}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
