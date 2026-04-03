import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";

export function Contact() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
            <div className="flex justify-center items-center">
                <Image
                    src="/getAqoute.png"
                    alt="Get A Quote Image"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl dark:shadow-purple-400 dark:shadow-sm object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
            </div>

            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-10 text-left md:text-right">
                        <h1 className="text-xl font-bold trackin-normal sm:text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-800/70">
                            Let&apos;s Build A Website<br className="hidden md:inline" />
                        </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed tracking-wider">
                        Bridging the gap between bold design and clean code to build your business&apos;s future.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-end">
                    <Link href="/contact">
                        <Button size="lg" className="group w-full rounded-[15px] px-[50px] py-[12px] bg-purple-500 lg:w-auto">
                            Get A Quote!
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}