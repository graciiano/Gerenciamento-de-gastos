'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import banner from "@/assets/banner.webp";

import ImagensOtimizadas from "@/components/imgemOtimizada/imagemOtimizada";
import sobreData from "@/public/data/sobre.json";

export default function Sobre() {
    return (
        <main className="sm:ml-14 p-4 mx-auto">
            <div className="mb-8 rounded-xl overflow-hidden shadow-xl flex gap-1 justify-center">
                <div className="mt-8 space-y-6">
                    <h3 className="flex justify-center file:p-4 text-2xl font-bold">{sobreData.title}</h3>
                    <p className="p-4 text-gray-600">{sobreData.description}</p>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h4 className="text-xl font-semibold mb-2">{sobreData.features[0].name}</h4>
                            <p className="text-gray-600">{sobreData.features[0].description}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h4 className="text-xl font-semibold mb-2">{sobreData.features[1].name}</h4>
                            <p className="text-gray-600">{sobreData.features[1].description}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h4 className="text-xl font-semibold mb-2">{sobreData.features[2].name}</h4>
                            <p className="text-gray-600">{sobreData.features[2].description}</p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-xl font-semibold mb-3">Contato</h4>
                        <p className="text-gray-600">Email: {sobreData.contact.email}</p>
                        <p className="text-gray-600">Telefone: {sobreData.contact.phone}</p>
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-0">
                <Carousel opts={{ loop: true }} className="w-full relative">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1 flex gap-1 justify-center items-center">
                                <ImagensOtimizadas src={banner} alt="Slide 3" />
                                <ImagensOtimizadas src={banner} alt="Slide 3" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1 flex gap-1 justify-center items-center">
                                <ImagensOtimizadas src={banner} alt="Slide 3" />
                                <ImagensOtimizadas src={banner} alt="Slide 3" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1 flex gap-1 justify-center items-center">
                                <ImagensOtimizadas src={banner} alt="Slide 3" />
                                <ImagensOtimizadas src={banner} alt="Slide 3" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    <div className="hidden sm:block">
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                </Carousel>
            </div>
        </main>
    );
}
