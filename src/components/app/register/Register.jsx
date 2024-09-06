import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Register({ isFillingForm, setIsFillingForm }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form
			// onSubmit={form.handleSubmit(console.log)}
			className="p-5 space-y-6"
		>
			<div className="space-y-1">
				<Label htmlFor="username">Username</Label>
				<Input
					id="username"
					type="text"
					value={username}
					placeholder="john_doe18"
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div className="space-y-1">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="johndoe18@gmail.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="space-y-1">
				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
					type="password"
					placeholder="abc12345"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<h6 className="text-sm text-muted-foreground">
					Must be at least 8 characters
				</h6>
			</div>
		</form>
	);
}
