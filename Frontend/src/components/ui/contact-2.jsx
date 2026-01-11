import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+91 000000000",
  email = "hello@arsunell.com",
  web = { label: "https://arsunull.vercel.app/", url: "https://arsunull.vercel.app/" },
}) => {
  return (
    <section className="bg-black py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-16 lg:flex-row lg:gap-24">
          {/* LEFT CONTENT */}
          <div className="flex max-w-sm flex-col gap-12">
            <div>
              <h1 className="mb-4 text-5xl font-semibold lg:text-6xl">
                {title}
              </h1>
              <p className="text-gray-400">{description}</p>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold">
                Contact Details
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="font-medium text-white">Phone:</span>{" "}
                  {phone}
                </li>
                <li>
                  <span className="font-medium text-white">Email:</span>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="underline underline-offset-4 hover:text-white"
                  >
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-white">Web:</span>{" "}
                  <a
                    href={web.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-screen-md rounded-xl border border-white/10 bg-neutral-900 p-8 shadow-xl">
            <div className="flex gap-4">
              <div className="flex w-full flex-col gap-2">
                <Label className="text-gray-300">First Name</Label>
                <Input
                  className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
                  placeholder="First Name"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label className="text-gray-300">Last Name</Label>
                <Input
                  className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-gray-300">Email</Label>
              <Input
                type="email"
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
                placeholder="Email"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-gray-300">Subject</Label>
              <Input
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
                placeholder="Subject"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-gray-300">Message</Label>
              <Textarea
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white min-h-[120px]"
                placeholder="Type your message here..."
              />
            </div>

            <Button
              className="mt-6 w-full bg-white text-black hover:bg-gray-200"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
