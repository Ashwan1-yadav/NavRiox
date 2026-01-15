import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function DefaultDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, contactNo, message } = formData;

    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (!contactNo.trim()) {
      toast.error("Phone number is required");
      return false;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(contactNo)) {
      toast.error("Enter a valid phone number");
      return false;
    }

    if (!message.trim()) {
      toast.error("Message cannot be empty");
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Message should be at least 10 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await axios.post(`${BASE_URL}/api/v1/contact`, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        contactNo: formData.contactNo.trim(),
        message: formData.message.trim(),
      });

      toast.success("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        contactNo: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-black p-4 text-white">
      <div className="mx-auto max-w-5xl w-full">
        <ContactCard
          className="bg-neutral-900 border border-white/10"
          title="Get in touch"
          description="If you have any questions regarding our services or need help, please fill out the form. We usually respond within 1 business day."
          contactInfo={[
            
            { icon: PhoneIcon, label: "Phone", value: "+91 7500366248" },
            {
              icon: MapPinIcon,
              label: "Address",
              value: "Agra, India",
              className: "col-span-2",
            },
            { icon: MailIcon, label: "Email", value: "navrioxdigitalsolutions@gmail.com" },
          ]}
        >
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Name</Label>
              <Input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Email</Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Phone</Label>
              <Input
                name="contactNo"
                type="tel"
                value={formData.contactNo}
                onChange={handleChange}
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Message</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-black border-white/15 text-white placeholder:text-gray-500 focus:border-white"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black hover:bg-gray-200 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </ContactCard>
      </div>
    </main>
  );
}
