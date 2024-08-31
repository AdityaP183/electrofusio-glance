import {
	NavigationMenu,
} from "@/components/ui/navigation-menu";
import ThemeColorToggle from "../themeToggle/ThemeColorToggle";
import ThemeModeToggle from "../themeToggle/themeModeToggle";

export default function Navbar() {
	return (
		<NavigationMenu className="justify-between max-w-full px-4 py-2 border-b">
			<div className="flex items-center gap-3">
				<img src="/logo.svg" alt="" className="w-8 h-8" />
				<h4 className="font-semibold">Examples</h4>
			</div>
			<div className="flex items-center gap-3">
                <ThemeColorToggle />
                <ThemeModeToggle />
            </div>
		</NavigationMenu>
	);
}
