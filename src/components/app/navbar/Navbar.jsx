import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ColorToggle from "../colorToggle/ColorToggle";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function Navbar() {
	return (
		<NavigationMenu className="justify-between max-w-full px-4 py-2 border-b h-[60px]">
			<div className="flex items-center gap-3">
				<img src="/logo.svg" alt="" className="w-8 h-8" />
				<Link to={"/"} replace>
					<h4 className="font-semibold">Examples</h4>
				</Link>
			</div>
			<div className="flex items-center gap-3">
				<ColorToggle />
				<ThemeToggle />
			</div>
		</NavigationMenu>
	);
}
