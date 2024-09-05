import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/app/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import { ThemeDataProvider } from "./context/themeDataProvider";
import Home from "./pages/Home";
import ButtonsDisplay from "./sections/ButtonsDisplay";
import ChartsDisplay from "./sections/ChartsDisplay";
import AuthDisplay from "./sections/AuthDisplay";
import DataTableDisplay from "./sections/DataTableDisplay";
import ProductDisplay from "./sections/ProductDisplay";

export default function App() {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<ThemeDataProvider>
				<BrowserRouter>
					<Navbar />
					<div className="px-3 lg:w-1/2 lg:px-1 md:mx-auto">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/buttons"
								element={<ButtonsDisplay />}
							/>
							<Route path="/charts" element={<ChartsDisplay />} />
							<Route path="/auth" element={<AuthDisplay />} />
							<Route
								path="/table"
								element={<DataTableDisplay />}
							/>
							<Route
								path="product-card"
								element={<ProductDisplay />}
							/>
						</Routes>
					</div>
				</BrowserRouter>
			</ThemeDataProvider>
		</ThemeProvider>
	);
}
