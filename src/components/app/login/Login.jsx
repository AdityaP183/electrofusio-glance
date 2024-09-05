import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>Enter your details to login.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="space-y-1">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="space-y-1">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						placeholder="Enter password"
					/>
				</div>
				<div className="flex items-center justify-start w-full">
					<Button
						variant="link"
						className="px-0 text-muted-foreground"
					>
						Forgot Password?
					</Button>
				</div>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button>Login</Button>
			</CardFooter>
		</Card>
	);
}
