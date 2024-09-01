import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const pageLinks = [
	{
		name: "Buttons",
		description: "Buttons of different variants and sizes",
		href: "/buttons",
	},
	{
		name: "Charts",
		description: "Interactive and visual charts",
		href: "/charts",
	},
	{
		name: "Authentication",
		description: "Register and login pages",
		href: "/auth",
	},
	{
		name: "Data Table",
		description: "Descriptive and interactive tables",
		href: "/table",
	},
	{
		name: "Product Card",
		description: "Product card for different products",
		href: "/product-card",
	},
];

export default function Home() {
	const navigate = useNavigate();
	return (
		<div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">
			{pageLinks.map((link) => (
				<Card key={link.name}>
					<CardHeader>
						<CardTitle className="text-xl">{link.name}</CardTitle>
						<CardDescription>{link.description}</CardDescription>
					</CardHeader>
					<CardFooter className="flex justify-end">
						<Button
							variant="outline"
							className="flex items-center gap-2"
							onClick={() => navigate(link.href)}
						>
							Go <ArrowRight size={16} />
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
