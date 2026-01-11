import { Button } from "@/components/ui/button";

const defaultCompanies = [
  { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg", alt: "Arc" },
  { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg", alt: "Descript" },
  { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg", alt: "Mercury" },
  { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg", alt: "Ramp" },
  { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg", alt: "Retool" },
  { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg", alt: "Watershed" },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Us",
  description = "We are a product-focused team building modern, scalable solutions that help businesses grow.",
  mainImage = { src: "https://shadcnblocks.com/images/block/placeholder-1.svg", alt: "Main" },
  secondaryImage = { src: "https://shadcnblocks.com/images/block/placeholder-2.svg", alt: "Secondary" },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "Logo",
    title: "Hundreds of production-ready blocks",
    description: "Tools and components designed to move fast without sacrificing quality.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Trusted by teams worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Impact in Numbers",
  achievementsDescription = "Measurable results that reflect our commitment to quality and innovation.",
  achievements = defaultAchievements,
} = {}) => {
  return (
    <section className="bg-black py-32 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 grid gap-6 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-gray-400">{description}</p>
        </div>

        {/* Images */}
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="h-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />

          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-neutral-900 p-7 md:w-1/2 lg:w-auto">
              <img src={breakout.src} alt={breakout.alt} className="h-12 w-auto" />

              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-gray-400">{breakout.description}</p>
              </div>

              <Button
                asChild
                variant="outline"
                className="mr-auto border-white/20 text-black hover:bg-white hover:text-black"
              >
                <a href={breakout.buttonUrl} target="_blank" rel="noreferrer">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>

            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="rounded-xl object-cover md:w-1/2 lg:w-auto"
            />
          </div>
        </div>

        {/* Companies */}
        <div className="py-32 text-center">
          <p className="text-gray-400">{companiesTitle}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-10 opacity-80">
            {companies.map((company, idx) => (
              <img
                key={company.src + idx}
                src={company.src}
                alt={company.alt}
                className="h-6 md:h-8 invert"
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-10 md:p-16">
          <div className="mb-10 flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-gray-400">{achievementsDescription}</p>
          </div>

          <div className="flex flex-wrap justify-between gap-12 text-center">
            {achievements.map((item, idx) => (
              <div key={item.label + idx} className="flex flex-col gap-2">
                <p className="text-gray-400">{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Grid overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10 [mask-image:linear-gradient(to_bottom_right,#000,transparent)]" />
        </div>
      </div>
    </section>
  );
};
