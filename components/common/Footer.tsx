import Image from "next/image";
import Link from "next/link";
import { Facebook, Github, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-purple-400 text-white bg-purple-900/40">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-2">
            <div className="flex flex-row items-center shrink-0 -ml-3">
              <Link href="/">
                <Image src="/MY_LOGO-removebg-preview.png" alt="LOGO" width={100} height={100} className="sm:w-24 sm:w-10 w-auto h-auto" />
              </Link>
              <div className="font-bold text-md sm:text-sm md:text-xl lg:text-2xl -ml-2">
                <h1>OCHELLE B. ANDALES</h1>
              </div>
            </div>
            <p className="text-sm ">Passionate about secure information systems and accessible application development.</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Link href="https://www.facebook.com/rochelle.andales.90" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://github.com/Rochelle1453" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
              <Link href="https://www.instagram.com/reels/DTiS1ihAYHF/?hl=en" className="hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-left ">
            <h3 className="mb-3 text-sm font-medium mb-8">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium mb-8">Contact Information</h3>
            <ul className="space-y-1">
              <li>Bang Bang, Cordova, Cebu.</li>
              <li>hoperochelleandales@gmail.com</li>
              <li>+63 975 322 1337</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}