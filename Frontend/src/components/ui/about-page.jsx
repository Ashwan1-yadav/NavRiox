import { Button } from "../ui/button"
import { motion } from "framer-motion"

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
]

export default function AboutPage({ achievements = defaultAchievements }) {
  return (
    <div className="flex flex-col bg-black text-white">
      {/* ---------------- HERO SECTION ---------------- */}
      

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-6">
          {/* Header */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl md:text-5xl font-semibold">
              About Us
            </h2>
            <p className="text-gray-400">
              We are a product-focused team building scalable, modern digital
              experiences for forward-thinking businesses.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-6 mt-16">
            {/* LEFT IMAGE */}
            <div className="md:flex-1">
              <img
                src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_chat_gradient.png"
                alt="Left visual"
                className="rounded-xl object-cover w-full h-[300px] sm:h-[360px]"
              />
            </div>

            {/* RIGHT CARDS */}
            <div className="flex flex-col gap-6 md:flex-1">
              {/* CARD 1 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="rounded-xl bg-neutral-900 border border-white/10 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">Accelerate Growth</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Purpose-built solutions that create real business impact.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-4 border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative rounded-xl overflow-hidden border border-white/10"
              >
                <img
                  src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_hero_gradient.jpg"
                  className="h-[220px] w-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-semibold">
                    Future-Ready Design
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Clean, scalable interfaces built for long-term growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
