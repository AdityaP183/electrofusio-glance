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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

export default function AuthDisplay() {
	return (
		<div className="flex justify-center w-full mt-10">
			<Tabs defaultValue="register" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-2 mb-3">
					<TabsTrigger value="register">Register</TabsTrigger>
					<TabsTrigger value="login">Login</TabsTrigger>
				</TabsList>
				<TabsContent value="register">
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
								/>
							</div>
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
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button>Register</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="login">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Login</CardTitle>
							<CardDescription>
								Enter your details to login.
							</CardDescription>
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
							<Button>Save password</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
