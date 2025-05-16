import Image from "next/image"

export default function HistoricalSignificance() {
  return (
    <div className="py-20 bg-accent">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Heritage</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">A Site of Historical Significance</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/a-frame-structure.png"
              alt="Historical view of the property"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              Originally home to the Celtic Shipyards and the Celtic Cannery, this property played a vital role in
              Vancouver's fishing industry and was home to a vibrant Japanese-Canadian community until 1942.
            </p>

            <p className="text-lg">
              Some original heritage structures still remain on the property, offering a unique opportunity to preserve
              and honor this important piece of Vancouver's history while creating something new and extraordinary.
            </p>

            <p className="text-lg">
              The property's rich history adds a layer of character and significance that cannot be replicated, making
              it truly one-of-a-kind in Vancouver's real estate landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
