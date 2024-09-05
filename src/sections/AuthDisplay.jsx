import Login from "@/components/app/login/Login";
import Register from "@/components/app/register/Register";
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
					<Register />
				</TabsContent>
				<TabsContent value="login">
					<Login />
				</TabsContent>
			</Tabs>
		</div>
	);
}
