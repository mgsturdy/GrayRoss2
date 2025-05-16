import Link from "next/link"
import Image from "next/image"
import { Play, ChevronRight, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import PropertyGallery from "@/components/property-gallery"
import AerialViews from "@/components/aerial-views"
import PropertyDetails from "@/components/property-details"
import HistoricalSignificance from "@/components/historical-significance"
import LocationMap from "@/components/location-map"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif tracking-tight text-primary">Grayross Estates</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#overview" className="text-sm uppercase tracking-wider transition-colors hover:text-primary">
              Overview
            </Link>
            <Link href="#property" className="text-sm uppercase tracking-wider transition-colors hover:text-primary">
              Property
            </Link>
            <Link href="#location" className="text-sm uppercase tracking-wider transition-colors hover:text-primary">
              Location
            </Link>
            <Link href="#gallery" className="text-sm uppercase tracking-wider transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-wider transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Link href="https://lorirowe.ca" target="_blank" rel="noopener noreferrer">
            <Button className="border border-secondary/50 bg-primary hover:bg-primary/90">View Agent Profile</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative h-[90vh]">
          <Image
            src="/images/waterfront-neighborhood.png"
            alt="Grayross Estates Property"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <div className="inline-block border-t border-b border-white/50 px-6 py-2">
              <span className="text-sm uppercase tracking-widest text-white">Exclusive Listing</span>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-light tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Grayross Estates
            </h1>
            <p className="mt-4 max-w-3xl text-xl font-light bg-primary/40 px-6 py-3 rounded-lg backdrop-blur-[2px]">
              7520 Balaclava Street, Vancouver BC - A rare waterfront estate with over 990 feet of private Fraser River frontage
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <Play className="h-4 w-4" /> Watch Video Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                Request Information <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Overview section */}
        <section id="overview" className="py-24">
          <div className="container">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
                <span className="text-sm uppercase tracking-widest text-primary">Investment Opportunity</span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">
                $30,000,000
              </h2>
              <p className="mt-6 text-xl font-light text-muted-foreground">
                A rare chance to acquire prime real estate on the water in Vancouver
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                This extraordinary property offers a unique combination of size, location, and development potential
                that is virtually impossible to find elsewhere in Vancouver's luxury real estate market.
              </p>
            </div>
          </div>
        </section>

        {/* Property sections */}
        <AerialViews />
        <section id="property">
          <PropertyDetails />
        </section>

        {/* Location section */}
        <section id="location">
          <LocationMap />
          <HistoricalSignificance />
        </section>

        {/* Gallery section */}
        <section id="gallery" className="py-20 bg-muted">
          <div className="container">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-serif font-light tracking-tight sm:text-4xl md:text-5xl">Property Gallery</h2>
              <p className="mt-4 text-xl text-muted-foreground">Explore the beauty and potential of Grayross Estates</p>
            </div>
            <div className="mt-12">
              <PropertyGallery />
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-serif font-light tracking-tight sm:text-4xl md:text-5xl">Contact The Agent</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Interested in this prestigious property? Get in touch for more information
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">604.803.3936</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">lori@lorirowe.ca</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="https://lorirowe.ca" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Visit GrayrossEstates.com
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-8">
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="I'm interested in learning more about this property..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <footer className="border-t border-primary/10 bg-white">
        <div className="container py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-serif text-2xl tracking-tight text-primary">Grayross Estates</span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">A premier development opportunity</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <Link
                href="https://lorirowe.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-primary hover:text-primary/80"
              >
                Visit lorirowe.ca
              </Link>
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Grayross Estates. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}