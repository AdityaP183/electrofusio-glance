export const ThemeColors = {
	ZINC: "Zinc",
	ROSE: "Rose",
	BLUE: "Blue",
	GREEN: "Green",
	ORANGE: "Orange",
	Slate: "Slate",
};

export const themeColorStateParams = {
    themeColor: ThemeColors.ZINC,
    setThemeColor: (newColor) => {
        themeColorStateParams.themeColor = newColor;
    }
}