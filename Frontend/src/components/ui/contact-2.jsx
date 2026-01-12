import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+91 000000000",
  email = "hello@arsunell.com",
  web = { label: "https://arsunull.vercel.app/", url: "https://arsunull.vercel.app/" },
}) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.contactNo.trim())
      newErrors.contactNo = "Contact number is required";
    if (!formData.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${BASE_URL}/api/v1/contact`, formData);

      toast.success("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        contactNo: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-20 md:py-32 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-14 lg:flex-row lg:gap-24">
  
          {/* LEFT CONTENT */}
          <div className="flex w-full max-w-full sm:max-w-md flex-col gap-10">
            <div>
              <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                {title}
              </h1>
              <p className="text-sm sm:text-base text-gray-400">
                {description}
              </p>
            </div>
  
            <div>
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold">
                Contact Details
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li>
                  <span className="font-medium text-white">Phone:</span>{" "}
                  {phone}
                </li>
                <li className="break-all">
                  <span className="font-medium text-white">Email:</span>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="underline underline-offset-4"
                  >
                    {email}
                  </a>
                </li>
                <li className="break-all">
                  <span className="font-medium text-white">Web:</span>{" "}
                  <a
                    href={web.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-full md:max-w-screen-md rounded-xl border border-white/10 bg-neutral-900 p-5 sm:p-6 md:p-8 shadow-xl"
          >
            <div className="flex w-full flex-col gap-2">
              <Label className="text-gray-300">Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-black border-white/15 text-white"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-sm text-red-400">{errors.name}</p>
              )}
            </div>
  
            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-gray-300">Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black border-white/15 text-white"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email}</p>
              )}
            </div>
  
            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-gray-300">Contact Number</Label>
              <Input
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="bg-black border-white/15 text-white"
                placeholder="+91 9999999999"
              />
              {errors.contactNo && (
                <p className="text-sm text-red-400">
                  {errors.contactNo}
                </p>
              )}
            </div>
  
            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-gray-300">Message</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-black border-white/15 text-white min-h-[100px] sm:min-h-[120px]"
                placeholder="Type your message here..."
              />
              {errors.message && (
                <p className="text-sm text-red-400">
                  {errors.message}
                </p>
              )}
            </div>
  
            <Button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-white text-black hover:bg-gray-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
  
};
