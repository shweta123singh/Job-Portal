import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'



const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Cyber Security ",
]

function CategoryCarousel() {
    return (
        <div>
            <Carousel className="w-full max-sm:max-w-[234px] sm:max-w-xl mx-auto my-10">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="basis-[60%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ">
                                <Button variant="outline" className="rounded-full">
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel