import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DefaultDemo() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-black p-4 text-white">
      <div className="mx-auto max-w-5xl w-full">
        <ContactCard
          className="bg-neutral-900 border border-white/10"
          title="Get in touch"
          description="If you have any questions regarding our services or need help, please fill out the form. We usually respond within 1 business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "hello@Ar$eNuLL.com",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "+91 000000000",
            },
            {
              icon: MapPinIcon,
              label: "Address",
              value: "Agra, India",
              className: "col-span-2",
            },
          ]}
        >
          <form className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Name</Label>
              <Input
                type="text"
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Email</Label>
              <Input
                type="email"
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Phone</Label>
              <Input
                type="tel"
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Message</Label>
              <Textarea
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200"
            >
              Submit
            </Button>
          </form>
        </ContactCard>
      </div>
    </main>
  );
}
