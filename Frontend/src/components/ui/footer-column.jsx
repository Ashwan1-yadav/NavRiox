import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

import logo from "@/assests/logo.png";


const data = {
  facebookLink: 'https://facebook.com/mvpblocks',
  instaLink: 'https://instagram.com/mvpblocks',
  twitterLink: 'https://twitter.com/mvpblocks',
  githubLink: 'https://github.com/mvpblocks',
  dribbbleLink: 'https://dribbble.com/mvpblocks',
  services: {
    webdev: '/web-development',
    webdesign: '/web-design',
    marketing: '/marketing',
    googleads: '/google-ads',
  },
  about: {
    history: '/company-history',
    team: '/meet-the-team',
    handbook: '/employee-handbook',
    careers: '/careers',
  },
  help: {
    faqs: '/faqs',
    support: '/support',
    livechat: '/live-chat',
  },
  contact: {
    email: 'navrioxdigitalsolutions@gmail.com',
    phone: '+91 7500366248',
    address: 'Agra, Uttar Pradesh, India',
  },
  company: {
    name: 'NavRiox',
    description:
      'Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.',
    logo: logo,
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink },
];

const aboutLinks = [
  { text: 'Company History', href: data.about.history },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Employee Handbook', href: data.about.handbook },
  { text: 'Careers', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Web Development', href: data.services.webdev },
  { text: 'Web Design', href: data.services.webdesign },
  { text: 'Marketing', href: data.services.marketing },
  { text: 'Google Ads', href: data.services.googleads },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
  { text: 'Live Chat', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-black text-white mt-16 w-full px-4">
      <div className="mx-auto max-w-screen-xl px-4  pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex justify-center gap-2 sm:justify-start">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="logo"
                className="h-10"
              />
            </div>

            <p className="mt-6 max-w-md text-center text-white/70 leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            {/* Social Icons */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white transition hover:text-white/80 hover:scale-110"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {/* About */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="text-white/60 transition hover:text-white"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="text-white/60 transition hover:text-white"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            

            {/* Contact */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <Icon className="size-5 shrink-0 text-white" />
                      {isAddress ? (
                        <address className="not-italic text-white/60">
                          {text}
                        </address>
                      ) : (
                        <span className="text-white/60">{text}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white/60">
              All rights reserved.
            </p>
            <p className="text-sm text-white/60 sm:order-first">
              &copy; 2026 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
