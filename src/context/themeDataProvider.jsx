import setGlobalColorTheme from "@/lib/theme-colors";
import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeDataProvider = ({ children }) => {
	const getSavedTheme = () => {
		try {
			return localStorage.getItem("themeColor") || "Zinc";
		} catch (error) {
			return "Zinc";
		}
	};

	const [themeColor, setThemeColor] = useState(getSavedTheme());
	const [isMounted, setIsMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		localStorage.setItem("themeColor", themeColor);
		setGlobalColorTheme(themeColor, theme);

		if (!isMounted) {
			setIsMounted(true);
		}
	}, [themeColor, theme]);

	if (!isMounted) {
		return null;
	}

	return (
		<ThemeContext.Provider value={{ themeColor, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useThemeContext() {
	return useContext(ThemeContext);
}
