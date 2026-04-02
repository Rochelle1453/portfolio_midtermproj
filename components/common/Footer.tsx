import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Github, Instagram, LucideIcon } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
] as const;

interface ContactItem {
  label: string;
  value: string;
  icon: LucideIcon;
  href: string;
}

const contactInfo: ContactItem[] = [
  {
    label: "Email",
    value: "hoperochelleandales.com",
    icon: Mail,
    href: "mailto:hoperochelleandales.com"
  },
  {
    label: "Phone",
    value: "+63 975 322 1337",
    icon: Phone,
    href: "tel:+639753221337"
  },
  {
    label: "Address",
    value: "Cordova, Cebu",
    icon: MapPin,
    href: "https://maps.app.goo.gl/y9Mu1eMnZhx34J8Z9"
  }
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-purple-400 text-white bg-purple-900/40">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-border pb-10 mb-5">
          <div className="space-y-2">
            <div className="flex flex-row items-center shrink-0 -ml-3">
              <Link href="/">
                <Image src="/DarkLogo.png" alt="LOGO" width={100} height={100} className="sm:w-24 sm:w-10 w-auto h-auto hidden dark:block" />
                <Image src="/LightLogo.png" alt="LOGO" width={100} height={100} className="sm:w-24 sm:w-10 w-auto h-auto block dark:hidden" />
              </Link>
              <div className="font-bold text-md text-foreground sm:text-sm md:text-xl lg:text-2xl -ml-2">
                <h1>OCHELLE B. ANDALES </h1>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Passionate about secure information systems and accessible application development.</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Link href="https://www.facebook.com/rochelle.andales.90" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://github.com/Rochelle1453" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
              <Link href="https://www.instagram.com/itz_rchll_21/" className="hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-center">
            <h3 className="mb-5 text-md font-semibold text-foreground">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href} >
                  <Link
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-center">
            <div className="flex flex-col items-start">
              <h3 className="mb-5 text-md font-semibold text-foreground">Contact Info</h3>
              <ul className="space-y-2">
                {contactInfo.map((info) => {
                  const Icon = info.icon;

                  return (
                    <li key={info.label} className="flex items-center group">
                      <div className="mr-2.5 transition-colors">
                        <Icon size={18} className="text-muted-foreground group-hover:text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <Link
                          href={info.href}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {info.value}
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}