import { useEffect, useState } from "react";
import { productData } from "@/utils/data";
import ProductCard from "@/components/app/productCard/ProductCard";

export default function ProductDisplay() {
	return (
		<div className="flex flex-col w-full gap-10 mt-2 mb-5">
			{/* Carousel 1 */}
			<div id="carousel-1-container" className="relative w-full">
				<h4 className="mb-2 text-xl font-semibold">Variant 1</h4>
				<div
					id="carousel-1"
					className="flex space-x-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
				>
					{productData.map((product) => (
						<ProductCard
							key={product.id}
							type="card1"
							data={product}
						/>
					))}
				</div>
			</div>

			{/* Carousel 2 */}
			<div id="carousel-1-container" className="relative w-full">
				<h4 className="mb-2 text-xl font-semibold">Variant 2</h4>
				<div
					id="carousel-1"
					className="flex space-x-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
				>
					{productData.map((product) => (
						<ProductCard
							key={product.id}
							type="card2"
							data={product}
						/>
					))}
				</div>
			</div>

			{/* Carousel 3 */}
			<div id="carousel-1-container" className="relative w-full">
				<h4 className="mb-2 text-xl font-semibold">Variant 3</h4>
				<div
					id="carousel-1"
					className="flex space-x-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
				>
					{productData.map((product) => (
						<ProductCard
							key={product.id}
							type="card3"
							data={product}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
