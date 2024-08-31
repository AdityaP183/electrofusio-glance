import {
	Bar,
	BarChart,
	CartesianGrid,
	Label,
	LabelList,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	RadialBar,
	RadialBarChart,
	XAxis,
} from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	chartConfig,
	chartData,
	otherChartConfig,
	otherChartData,
} from "../../../utils/chartDataValues.js";
import { useMemo } from "react";

const BarGraph = () => {
	return (
		<ChartContainer config={chartConfig}>
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<Legend />
				<XAxis dataKey="month" />
				<ChartTooltip cursor={true} content={<ChartTooltipContent />} />
				<Bar
					dataKey="desktop"
					fill={chartConfig.desktop.color}
					radius={5}
				/>
				<Bar
					dataKey="mobile"
					fill={chartConfig.mobile.color}
					radius={5}
				/>
			</BarChart>
		</ChartContainer>
	);
};

const LineGraph = () => {
	return (
		<ChartContainer config={chartConfig}>
			<LineChart
				accessibilityLayer
				data={chartData}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<Legend iconType="square" />
				<XAxis dataKey="month" />
				<ChartTooltip cursor={true} content={<ChartTooltipContent />} />
				<Line
					dataKey="desktop"
					type="monotone"
					stroke={chartConfig.desktop.color}
					strokeWidth={2}
					dot={false}
				/>
				<Line
					dataKey="mobile"
					type="monotone"
					stroke={chartConfig.mobile.color}
					strokeWidth={2}
					dot={false}
				/>
			</LineChart>
		</ChartContainer>
	);
};

const RadialGraph = () => {
	return (
		<ChartContainer
			config={otherChartConfig}
			className="mx-auto aspect-square max-h-[250px]"
		>
			<RadialBarChart
				data={otherChartData}
				startAngle={-90}
				endAngle={380}
				innerRadius={30}
				outerRadius={110}
			>
				<ChartTooltip
					cursor={false}
					content={
						<ChartTooltipContent hideLabel nameKey="browser" />
					}
				/>
				<RadialBar dataKey="visitors" background>
					<LabelList
						position="insideStart"
						dataKey="browser"
						className="capitalize fill-white mix-blend-luminosity"
						fontSize={11}
					/>
				</RadialBar>
			</RadialBarChart>
		</ChartContainer>
	);
};

const PieGraph = () => {
	const totalVisitors = useMemo(() => {
		return otherChartData.reduce((acc, curr) => acc + curr.visitors, 0);
	}, []);

	return (
		<ChartContainer
			config={otherChartConfig}
			className="mx-auto aspect-square max-h-[250px]"
		>
			<PieChart>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
				<Pie
					data={otherChartData}
					dataKey="visitors"
					nameKey="browser"
					innerRadius={60}
					strokeWidth={5}
					radius={180}
				>
					<Label
						content={({ viewBox }) => {
							if (viewBox && "cx" in viewBox && "cy" in viewBox) {
								return (
									<text
										x={viewBox.cx}
										y={viewBox.cy}
										textAnchor="middle"
										dominantBaseline="middle"
									>
										<tspan
											x={viewBox.cx}
											y={viewBox.cy}
											className="text-3xl font-bold fill-foreground"
										>
											{totalVisitors.toLocaleString()}
										</tspan>
										<tspan
											x={viewBox.cx}
											y={(viewBox.cy || 0) + 24}
											className="fill-muted-foreground"
										>
											Visitors
										</tspan>
									</text>
								);
							}
						}}
					/>
				</Pie>
			</PieChart>
		</ChartContainer>
	);
};

export default function AllGraphs({ type }) {
	if (type === "bar") {
		return <BarGraph />;
	}
	if (type === "line") {
		return <LineGraph />;
	}
	if (type === "pie") {
		return <PieGraph />;
	}
	if (type === "radial") {
		return <RadialGraph />;
	}
	return <BarGraph />;
}
