
import { Section } from "@/components/common/Section";
import { Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";

export function Profile() {
    return (
        <Section className="grid lg:grid-cols-3 gap-5 items-center">
            <div className="flex flex-col items-center justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold tracking-wide md:text-4xl sm:text-2xl italic text-gradient bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-800/70">
                        Rochelle B. Andales
                    </h1>
                    <p className="max-w-[700px] text-center text-sm sm:text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Web Developer <br /> X <br /> Programmer
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Image
                    src="/hero.png"
                    alt="Coding Environment"
                    width={500}
                    height={500}
                    className="rounded-full shadow-2xl dark:shadow-purple-400 dark:shadow-sm object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
            </div>

            <div className="p-6 w-fit space-y-4 text-gray-800/relaxed">
                <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <p className="text-sm">+63 975 322 1337</p>
                </div>

                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <p className="text-sm">hoperochelleandales@gmail.com</p>
                </div>

                <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <p className="text-sm">Bang Bang, Cordova, Cebu</p>
                </div>
            </div>
        </Section>
    );
}