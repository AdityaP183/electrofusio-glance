import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const termsAndConditions = [
	{
		head: "User Accounts",
		description:
			"You must create an account to access certain features of the platform. You are responsible for maintaining the confidentiality of your account details.",
	},
	{
		head: "Product Information",
		description:
			"We make every effort to provide accurate product descriptions, but errors may occur. We reserve the right to correct such errors at any time.",
	},
	{
		head: "Orders and Payments",
		description:
			"All orders are subject to acceptance and availability. We accept payments through various secure payment methods as listed during checkout.",
	},
	{
		head: "Shipping and Delivery",
		description:
			"We aim to deliver products within the specified time. Delays may occur due to factors beyond our control.",
	},
	{
		head: "Returns and Refunds",
		description:
			"Returns are accepted within 30 days of receipt of the product. Refunds will be processed once the returned item is received and inspected.",
	},
	{
		head: "User Conduct",
		description:
			"Users are expected to act responsibly and not engage in fraudulent activities, spamming, or other prohibited behavior.",
	},
	{
		head: "Intellectual Property",
		description:
			"All content on this platform, including logos, images, and text, is the intellectual property of the platform owner and protected by law.",
	},
	{
		head: "Privacy Policy",
		description:
			"Your personal data is handled in accordance with our Privacy Policy, which can be reviewed separately.",
	},
	{
		head: "Limitation of Liability",
		description:
			"We are not responsible for any indirect, incidental, or consequential damages arising from the use of the platform.",
	},
	{
		head: "Changes to Terms",
		description:
			"We reserve the right to update or modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the revised terms.",
	},
];

export default function RegisterSuccess() {
	return (
		<div className="px-1 py-2">
			<h1 className="text-3xl font-bold leading-10">Congratulations!</h1>
			<p className="text-lg">Your account is ready!</p>
			<ScrollArea className="my-5 relative h-[280px] w-full rounded-lg border border-t-0 p-0 overflow-hidden">
				<h1 className="sticky top-0 left-0 p-1 bg-opacity-50 border-t rounded-t-lg bg-slate-900 backdrop-filter backdrop-blur">
					Terms and Conditions
				</h1>
				<div className="px-2 py-1">
					{termsAndConditions.map(({ head, description }, index) => (
						<div className="mb-2" key={index + 1}>
							<h2 className="text-lg font-semibold leading-8">
								{index + 1}. {head}
							</h2>
							<p className="tracking-tight text-justify text-muted-foreground">
								{description}
							</p>
						</div>
					))}
				</div>
			</ScrollArea>
			<div className="flex items-center ml-1 space-x-2">
				<Checkbox id="terms" />
				<label
					htmlFor="terms"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Accept terms and conditions
				</label>
			</div>
		</div>
	);
}
