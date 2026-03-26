"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Section } from "@/components/common/Section";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea, } from "@/components/ui/input-group";
import { MoveRight, Phone, MapPin, Mail, Dot, Facebook, Instagram, Github, Fullscreen } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/common/SectionHeading";

const formSchema = z.object({
	firstName: z.string().min(2, { message: "First Name must be at least 2 characters." }),
	lastName: z.string().min(2, { message: "Last Name must be at least 2 characters." }),
	email: z.string().email({ message: "Invalid email address." }),
	message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormData) => {
		console.log("Form submitted:", data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		toast.success("Sent successfully!");
		form.reset();
	};

	return (
		<Section className="min-h-screen">
			<SectionHeading
				icon={<MoveRight className="h-8 w-8 text-primary" />}
				title="CONTACT"
			/>
			<div className="grid lg:grid-cols-2 lg:gap-24 gap-12 items-center">
				<Card className="w-full">
					<CardHeader>
						<CardTitle className="text-4xl font-bold">Let's Talk</CardTitle>
						<CardDescription className="text-muted-foreground text-lg ">
							Have a project, idea, or opportunity in mind? I'd love to hear from you. Let's connect and talk about it.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
							<FieldGroup	>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Controller
										name="firstName"
										control={form.control}
										render={({ field, fieldState }) => (
											<Field data-invalid={fieldState.invalid}>
												<FieldLabel htmlFor="firstName">First Name</FieldLabel>
												<Input
													{...field}
													id="firstName"
													aria-invalid={fieldState.invalid}
													placeholder="John"
													autoComplete="given-name"
												/>
												{fieldState.invalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										)}
									/>
									<Controller
										name="lastName"
										control={form.control}
										render={({ field, fieldState }) => (
											<Field data-invalid={fieldState.invalid}>
												<FieldLabel htmlFor="lastName">Last Name</FieldLabel>
												<Input
													{...field}
													id="lastName"
													aria-invalid={fieldState.invalid}
													placeholder="Doe"
													autoComplete="family-name"
												/>
												{fieldState.invalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										)}
									/>

								</div>
								<Controller
									name="email"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="email">Email</FieldLabel>
											<Input
												{...field}
												id="email"
												type="email"
												aria-invalid={fieldState.invalid}
												placeholder="john@example.com"
												autoComplete="email"
											/>
											{fieldState.invalid && (
												<FieldError errors={[fieldState.error]} />
											)}
										</Field>
									)}
								/>

								<Controller
									name="message"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="message">Message</FieldLabel>
											<InputGroup>
												<InputGroupTextarea
													{...field}
													id="message"
													placeholder="Tell me about your project..."
													rows={6}
													className="min-h-24 resize-none"
													aria-invalid={fieldState.invalid}
												/>
												<InputGroupAddon align="block-end">
													<InputGroupText className="tabular-nums">
														{field.value.length}/500 characters
													</InputGroupText>
												</InputGroupAddon>
											</InputGroup>
											{fieldState.invalid && (
												<FieldError errors={[fieldState.error]} />
											)}
										</Field>
									)}
								/>
							</FieldGroup>
						</form>
					</CardContent>
					<CardFooter>
						<Button type="submit" form="contact-form" className="w-fit px-10 bg-purple-500" size="lg" disabled={form.formState.isSubmitting}>
							{form.formState.isSubmitting ? "Sending..." : "Submit"}
						</Button>
					</CardFooter>
				</Card>

				<div className="space-y-2 grid grid-row-2">
					<img src="./contact.png" alt="contact image" />
					<p className="font-medium">Contact Information</p>
					<div>

						<div className="grid grid-rows-2 items-center">
							<div className="grid grid-rows-3 items-center gap-1 ">
								<div className="flex items-center gap-3 ">
									<Mail className="h-5 w-5" />
									<p>hoperochelleandales@gmail.com</p>
								</div>
								<div className="flex items-center gap-3 ">
									<MapPin className="h-5 w-5" />
									<p>Cebu, Philippines</p>
								</div>
								<div className="flex items-center gap-3 ">
									<Phone className="h-5 w-5" />
									<p>+63 975 322 1337</p>
								</div>
							</div>
							<hr className="border-black dark:border-white opacity-100 -mt-10" />
							<div className="flex items-center -mt-15">
								<a href="https://www.facebook.com/rochelle.andales.90/" target="_blank" rel="noopener noreferrer">
									<Facebook />
								</a><Dot />
								<a href="https://www.instagram.com/itz_rchll_21/" target="_blank" rel="noopener noreferrer">
									<Instagram />
								</a><Dot />
								<a href="https://github.com/Rochelle1453" target="_blank" rel="noopener noreferrer">
									<Github />
								</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
