import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import React from "react";

export default function ButtonsDisplay() {
	return (
		<>
            <p className="text-2xl font-bold">Buttons</p>
			<div className="flex flex-col gap-4 p-3">
				<p>Variants</p>
				<div className="flex flex-wrap items-center gap-3">
					<Button variant="default">Default</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link">Link</Button>
				</div>
				<p>Sizes</p>
				<div className="flex flex-wrap items-center gap-3">
					<Button>Deafult</Button>
					<Button size="lg">Large</Button>
					<Button size="sm">Small</Button>
					<Button size="icon">
						<RotateCw className="animate-spin" />
					</Button>
				</div>
			</div>
		</>
	);
}
