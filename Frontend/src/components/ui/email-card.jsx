import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen mt-[-100px] mb-[-100px] w-full bg-black flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="w-full max-w-md space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold text-white">
            Get In Touch
          </h1>
          <p className="text-sm text-white/60">
              Subscribe to our newsletter to stay updated on our latest news and offers.
          </p>
        </div>

        <div className="gradient-border">
          <Card className="p-6 space-y-5 bg-zinc-950 border border-white/10 shadow-lg shadow-black/40">
            
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Full Name
              </label>
              <Input
                placeholder="Enter your name"
                className="bg-black border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/10 focus:border-white/20"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-black border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/10 focus:border-white/20"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                className="bg-black border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/10 focus:border-white/20"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <Badge className="bg-white/10 text-white border-white/20 text-xs">
                Active
              </Badge>

              <Button
                size="sm"
                className="px-6 bg-white text-black hover:bg-white/90 transition-all shadow-sm"
              >
                Contact
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
