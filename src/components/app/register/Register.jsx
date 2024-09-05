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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
// import { useStore } from "@/store/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const addUser = useStore((state) => state.addUser);
	const { toast } = useToast();
	const navigate = useNavigate();

	function handleRegister(e) {
		e.preventDefault();
		// addUser({ username, email, password });
		toast({
			title: "Registered successfully",
			description: "You have successfully registered",
			action: (
				<ToastAction altText="Login" onClick={() => navigate("/login")}>
					Login
				</ToastAction>
			),
		});
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">Register</CardTitle>
				<CardDescription>
					Enter your details to create your account.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="space-y-1">
					<Label htmlFor="username">Username</Label>
					<Input
						id="username"
						placeholder="Enter your username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="space-y-1">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="space-y-1">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button onClick={handleRegister}>Register</Button>
			</CardFooter>
		</Card>
	);
}
