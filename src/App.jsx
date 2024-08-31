import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/app/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import { ThemeDataProvider } from "./context/themeDataProvider";
import Home from "./pages/Home";
import ButtonsDisplay from "./sections/ButtonsDisplay";

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
					<div className="px-3 py-3 md:w-1/2 md:px-1 md:mx-auto">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/buttons" element={<ButtonsDisplay />} />
							{/* <Route path="/" element={<Home />} /> */}
						</Routes>
					</div>
				</BrowserRouter>
			</ThemeDataProvider>
		</ThemeProvider>
	);
}
