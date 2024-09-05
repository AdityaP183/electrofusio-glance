import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star } from "lucide-react";

const PCard1 = ({ data }) => {
	return (
		<Card className="flex flex-col lg:h-[380px] overflow-hidden min-w-52 lg:min-w-64">
			<CardHeader className="flex flex-row items-center justify-between flex-[0.5] px-3 py-1">
				<div>
					<Badge variant="secondary" className="text-sm">
						<span>{data.brand}</span>
					</Badge>
				</div>
				<div
					style={{
						margin: "0",
					}}
				>
					<Heart className="cursor-pointer hover:fill-red-500 hover:text-red-500" />
				</div>
			</CardHeader>
			<CardContent className="flex-[3] flex items-center justify-center p-4">
				<img
					src={data.image}
					alt="Product"
					className="object-cover w-[90%] h-auto"
				/>
			</CardContent>
			<CardFooter className="flex-[2] flex items-end justify-between px-2 pb-3">
				<div>
					<h4 className="text-2xl font-bold">&#8377;{data.price}</h4>
					<p className="text-base font-base">
						{data.title.length > 15
							? `${data.title.slice(0, 15)}...`
							: data.title}
					</p>
					<span className="flex items-center gap-1">
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star className="" size={16} />
					</span>
				</div>
				<Button size="sm">
					<ShoppingBag size={16} strokeWidth={2} />
				</Button>
			</CardFooter>
		</Card>
	);
};

const PCard2 = ({ data }) => {
	return (
		<Card className="flex flex-col h-[300px] min-w-52 lg:min-w-64 overflow-hidden">
			<CardHeader className="relative flex-[3] flex items-center justify-center p-4">
				<img
					src={data.image}
					alt="Product"
					className="object-cover w-[90%] h-auto"
				/>
				<div className="absolute top-2 right-3">
					<Heart className="cursor-pointer hover:fill-red-500 hover:text-red-500" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-[2] items-end justify-between px-2 pb-3">
				<div>
					<h4 className="text-2xl font-bold">&#8377;{data.price}</h4>
					<p className="text-base font-base text-ellipsis text-nowrap">
						{data.title.length > 15
							? `${data.title.slice(0, 15)}...`
							: data.title}
					</p>
					<span className="flex items-center gap-1">
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star className="" size={16} />
					</span>
				</div>
				<Button size="sm">
					<ShoppingBag size={16} strokeWidth={2} />
				</Button>
			</CardContent>
		</Card>
	);
};

const PCard3 = ({ data }) => {
	return (
		<Card className="flex flex-col lg:h-[380px] min-w-52 lg:min-w-64 overflow-hidden">
			<CardHeader className="relative flex flex-[3] items-center justify-center p-4">
				<img
					src={data.image}
					alt="Product"
					className="object-cover w-[90%] h-auto"
				/>
				<div className="absolute top-2 right-3">
					<Heart className="cursor-pointer hover:fill-red-500 hover:text-red-500" />
				</div>
			</CardHeader>
			<CardContent className="w-full flex flex-col flex-[2] justify-between gap-2 px-2 pb-3">
				<div>
					<h4 className="text-2xl font-bold">&#8377;{data.price}</h4>
					<p className="w-full overflow-hidden text-base text-ellipsis text-nowrap">
						{data.title}
					</p>
					<span className="flex items-center gap-1">
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star
							className="text-yellow-600 fill-yellow-600"
							size={16}
						/>
						<Star className="" size={16} />
					</span>
				</div>
				<div className="flex items-center justify-between w-full gap-2">
					<Button
						variant="secondary"
						className="flex items-center flex-1 min-w-0 gap-2 text-sm md:text-base"
					>
						Add to Cart
					</Button>
					<Button className="flex-1 min-w-0">Buy Now</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default function ProductCard({ type, data }) {
	if (type === "card1") {
		return <PCard1 data={data} />;
	}

	if (type === "card2") {
		return <PCard2 data={data} />;
	}

	if (type === "card3") {
		return <PCard3 data={data} />;
	}
	return <h4>Product card type not selected</h4>;
}
