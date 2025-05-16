"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// Update the images array with the actual property images
const images = [
  {
    src: "/images/waterfront-neighborhood.png",
    alt: "Waterfront neighborhood with Vancouver skyline in the background",
  },
  {
    src: "/images/waterfront-aerial.png",
    alt: "Aerial view of the waterfront property showing the Fraser River",
  },
  {
    src: "/images/a-frame-structure.png",
    alt: "Distinctive A-frame structure on the property",
  },
  {
    src: "/images/stable-interior-hd.png",
    alt: "Interior view of the elegant horse stables with string lighting",
  },
  {
    src: "/images/equestrian-facility.png",
    alt: "Equestrian facility with horses and riders",
  },
  {
    src: "/images/vancouver-skyline.png",
    alt: "Vancouver skyline at sunset",
  },
]

export default function PropertyGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-light">{images[currentIndex].alt}</h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square overflow-hidden rounded-md ${
              index === currentIndex ? "ring-2 ring-primary ring-offset-2" : "border border-primary/20"
            }`}
            onClick={() => goToImage(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
