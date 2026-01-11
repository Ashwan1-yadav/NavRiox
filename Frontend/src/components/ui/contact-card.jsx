import React from "react";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

export function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions regarding our services or need help, please fill out the form here. We usually respond within 1 business day.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative grid h-full w-full bg-neutral-900 border border-white/10 shadow-xl md:grid-cols-2 lg:grid-cols-3 text-white",
        className
      )}
      {...props}
    >
      {/* Corner icons */}
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white/30" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white/30" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white/30" />
      <PlusIcon className="absolute -bottom-3 -right-3 h-6 w-6 text-white/30" />

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-5 px-4 py-8 md:p-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="max-w-xl text-sm text-gray-400 md:text-base lg:text-lg">
            {description}
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div
        className={cn(
          "flex h-full w-full items-center border-t border-white/10 bg-black/40 p-5 md:col-span-1 md:border-t-0 md:border-l",
          formSectionClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value, className, ...props }) {
  return (
    <div
      className={cn("flex items-center gap-3 py-3", className)}
      {...props}
    >
      <div className="rounded-lg bg-white/5 p-3">
        <Icon className="h-5 w-5 text-white" />
      </div>

      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-gray-400">{value}</p>
      </div>
    </div>
  );
}
