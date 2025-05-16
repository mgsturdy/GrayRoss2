import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AerialViews() {
  return (
    <div className="bg-muted py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Property Overview</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">Aerial Perspectives</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Experience the full scope and potential of this remarkable 7.99-acre property
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/waterfront-aerial.png"
              alt="Aerial view of the waterfront property"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-primary/40 px-4 py-2 rounded-md backdrop-blur-[2px]">
                <h3 className="font-serif text-2xl font-light">Waterfront Access</h3>
                <p className="mt-2 text-white">Direct water access with existing docks and marine infrastructure</p>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/property-satellite.png"
              alt="Satellite view of the property grounds"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-primary/40 px-4 py-2 rounded-md backdrop-blur-[2px]">
                <h3 className="font-serif text-2xl font-light">Expansive Grounds</h3>
                <p className="mt-2 text-white">
                  7.99 acres of prime real estate with existing structures and infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2">
            <Image
              src="/images/a-frame-structure.png"
              alt="Aerial view of the property with mountain backdrop"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-primary/40 px-4 py-2 rounded-md backdrop-blur-[2px]">
                <h3 className="font-serif text-3xl font-light">Stunning Location</h3>
                <p className="mt-2 max-w-2xl text-white">
                  Located in Vancouver's prestigious Southlands neighborhood, just 15 minutes from downtown with
                  breathtaking mountain views
                </p>
                <Button className="mt-4 bg-primary text-white border border-white/30 hover:bg-primary/80">
                  Request Detailed Survey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}