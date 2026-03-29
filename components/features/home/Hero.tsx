import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram } from "lucide-react";
import { Section } from "@/components/common/Section";

export function Hero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-800/70">
                            Hi I&apos;m Rochelle B. Andales<br className="hidden md:inline" />
                        </h1>
                        <p className="text-sm font-bold tracking-tighter sm:text-base md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-800/70">
                            Web Developer | Programmer
                        </p>
                    </div>
                    <p className="max-w-[700px] tracking-normal text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                    A student passionate about technology and system development. I enjoy building simple and useful applications while learning new tools in programming and design.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/about">
                        <Button size="lg" className="group w-full rounded-[15px] px-[50px] py-[12px] bg-purple-500 lg:w-auto">
                            Learn More
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Link href="https://www.facebook.com/rochelle.andales.90" target="_blank" rel="noopener noreferrer" className="border border-purple-500 rounded-[99px] p-1 hover:text-foreground transition-colors">
                            <Facebook className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="https://github.com/Rochelle1453" target="_blank" rel="noopener noreferrer" className="border border-purple-500 rounded-[99px] p-1 hover:text-foreground transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">Github</span>
                        </Link>
                        <Link href="https://www.instagram.com/reels/DTiS1ihAYHF/?hl=en" className="border border-purple-500 rounded-[99px] p-1 hover:text-foreground transition-colors">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Image
                    src="/home.png"
                    alt="Me Image"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
            </div>
        </Section>
    );
}