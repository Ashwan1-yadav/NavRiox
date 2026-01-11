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
    email: 'hello@Ar$eNuLL.com',
    phone: '+91 000000000',
    address: 'Agra, Uttar Pradesh, India',
  },
  company: {
    name: 'Ar$eNuLL',
    description:
      'Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9gYGBdXV1UVFRbW1tXV1dTU1PY2Nh2dnZ6enr8/PxpaWn39/dkZGTk5OTy8vKVlZXMzMyjo6N/f3/t7e1wcHDe3t6NjY2wsLDBwcG7u7uGhoapqambm5vS0tKvr6+QkJBRwIq1AAAIZUlEQVR4nO2da3uiPBCGNScUBEQOVRD1///KNxOKDdi+YDenXtfcX3bLYpfHTGYmySRsNgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAgSGFVUXM7Xvj8ej/31fCmiyvcTGeOQXU4lEYJSztknnFMqxLa8XrKD7+f7N/LbtSOCM7L9FsK42Hb3KPf9nL8ka7uU/iROl0nTrv17Nlu1NeeL6p4qOd+1f6kl46IT6+WNIsXHLfb95Ouo7gl9U94AE/VfaMiqJ+82n96Q6SlwjVVP2W/lfTYkD1ljfv1XfUoju4caJNuU/7s+gCcX31q+I9v9vv/NIbQMLkDGV2FM36Dx7lvSlKw2ZKBf0H3mW5XGeTk5ex9CWt+6Rg4dNa8PoB8yyQkgz8lSAyHie1gdgsMpiAULHSHk5lvf5mzJQkeJ1Hdo7IVVgRJx9adO+oCj8SDxCj15dDcfDgRKib0vfZvOiUCPEh+OBA6G6oHemUAp0Ye7sRwm5hLdZ3AX62FiinAd+hunLQgwt0ONPLGYqn0PqZ3ObXTWku2fYR8OBV6d2yggzs4ENo69zAh30xXjzcF9JxwgO0f5qctQP4W7CfyRN4GO7DSuPdkoQHYOFJ49NqHM3uwP+XNPfnSEWI/7Rw+xXofbHkg1Xm0UsJ2ffnhuQqnQ7oDf/ZDiFWp1lthHxj2HHS0KzDw70gFqcRm8D6AJreZueRACtyS1FhNb76FigFtLbHYeM1Id0lkS6HNQMYVaivqnMLqhhNspY4h9De1fIYkVhVEQwXBAWDHTMILhALMSEtNgjNTSWL8KyEhlI1pIv0MJ9wM2gn4XkJHaGSWGEysACx0xC8iTAsR4RywCGN3rUOMrpr9N2cj3RWE/XV1dQsaNL0QtORpGvykRZoLU5S6dbb4gXCQ7eXW2Z4FRlpT7hK6rFTc+l3FYmMtn59ttfgvb3ofkKr+UmhpeX9Q0xKHoNOWE95G6Ob71a7ZrkL1hhfnCf0qbl+Ejf2hD8eLpirlWVdE8vxS20zLNrFzTjIYH+ktzUDSaK1ST0/Ht2vctPHz1KZEV8NvO/ekMTTbWAzDVItG5788N/G3FnJ4w7EyXXOmLQrXqXiRU7TY8xmO4gbqY+AE7ETnfV+OomiTSbqs9hcsULq+IvrQxq3ApZ3tRyOUzt2P9PofF2ysb5h/iseqdEXlPCbdw2bAN+2w3BvP20WJwMp23XRfMZq4QhjfZ11NymWTl8kfR6BWbYMgXPngNbXytFrPLpUbkhquklgaHc4UwRNXXOGAqviMwNq80a0ijCBTCw7Zao4liRaJveoj4eE8hpI3VxGjPsLbKTrNHpxR+4lK+HmrAlhdXSJjhZbalgD9TCPH4prtfcDw3Cv3tm++KyOA4EZTGmzxdUvgwq3CpW8wVXmeNBY3aCLhrP9yVjkA9l+yzE6MUh+WSFtOTpvv3FIJR3ucKMwG9c7grzQ4D8Z6Ao5nOxYp8uSCClN4VTkoaQEVDNYWHr9+s/m2qcEVZkmeFLy5l6IealfYnoFAKk7mVyn5Y/f//Z17h0pLFXOFjNr86NCotnqUO6mwF0SrF0tNsdE+zypd6bkOSgDfUPgMrDSUBB3TRWguGsfI382zqyiA+LpbtmPY0b0YLlbxo9W/Q1XKhvOZBixZQHAMK75PYQrb58ldqvNz0zYivzPSwfV4AwXf2+efT/lQFPlipbHFtOEHPa/JS07Nta7K2+nl2CRnStoYPnyLQ31SKo774bkjIiVB2Bo0FZpnv6Odl+eVslovnzGZt8arM+3QckTat0ue8J5RzUcqWiwezUyOCNpVXaSr/Wn2aI4EhZJvAZbWP+7Q8/Wx6omap49NIvxscIduruYoqU0fQHPbj2KhQV5sGRoGFDAuDQq5Ge3mWqQ+dVkzsmR49FUsKJ+NR5erJ1676uPjaZypO4+A8v1OZcw9tS9j9WUPS7NcsIJieTlwq7Sb1XmPoRYTXpyJqoqJP9Mk2tv1ob1HRHlMOHxszbJ4+Ljd58323btu06SXEajE8TRgvMg7MH5kMV4ePadK/vfknmOGZKG/V6z9BatNV7YuzCo4hxveX+K6cnWN6iB/aAql0pYVphf6Lg6ewzPT258PSvIlbzDuaFcm+U8w7muU5YbeYng8GQiqJsrQ9KKRlbpJaEBjARoQv7GxJuATUiObrFIBAqrwVzIbAkMzU1r6ZcEpq7BhpQCMoGwnNQCiF3pbKvDfzxQV/mK9pexLGMNjm4Qq3IDI3YbjOZEIIvsbufu4Q8hrLJ9X43/pket1wjv9GtBXtn/huRGZr39oT3wNhBydj+M2/Le9VVyyuYNhV6OKwKLcHtU1xdNanv9zNvpsZ8JeAW0y5p/iyU4fn0a6qpTeOywPbch+7LUni8tA9HxvXHZ3WNtI674rOD4V2fWib62NoY9dH1fAP9wdCH2qHEtnex3nXDs8wZTs/72VxFjNY7evlOpmbVmSJL4HxprL34gdNoGxBfy+5yO27G773+26kuLQcF9V7SvxKPFqduBH+3hrwxdnse5B0iI2ikl8QbS11RpbaXKF4h6q0kofTLqB3zFmwVLWFISAa0y/t4rsQXoQ04c4M9kZG3J2/vp6sM2WqRHxUQbys64XbL19AOtNHa9ieEqLADWzs+deXIBJe+36H1f8Tt//UjrL9LoE23hfxZSd+6XOY2BfB61NED/a+sRLOjqGkMCvI2/ItkVJedwn1DbI/kbUlX/HicfXqcfYXXz0OHIo+EVLljzKJVCeS0+2vtd6E/Hbtki2Hw3X0zW1w1A7fJt39b6t7UjXF+fTo9rs6kdS7snuc2lvzNy3zBd39x59nYfzwzwiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIH+e/wD6W4bIGbaaNQAAAABJRU5ErkJggg==',
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
    <footer className="bg-black text-white mt-16 w-full rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex justify-center gap-2 sm:justify-start">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
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

            {/* Helpful */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-white/60 transition hover:text-white'
                      }
                    >
                      <span>{text}</span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                      )}
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
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
