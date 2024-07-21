"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { cn, roles } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import Button from "@/components/landing-page/Button";
import Spinner from "../_components/Spinner";
import Image from "next/image";
import { NavLogo } from "@/assets/icons";
import { TailSpin } from "react-loader-spinner";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
	const { toast } = useToast();
	const { user, isLoading, setIsLoading } = useContext(AuthContext);

	const router = useRouter();

	const schema = z.object({
		emailAddress: z
			.string()
			.min(1, { message: "Email is required" })
			.email({ message: "Invalid email address" })
			.refine((val) => val.includes("@") && val.endsWith(".com"), {
				message: "Email must include '@' and end with '.com'",
			}),
		password: z
			.string()
			.min(1, { message: "Password is required" })
			.min(6, { message: "Password must be more than 6 characters" })
			.regex(/[!@#$%^&*(),.?":{}|<>]/, {
				message: "Password must contain a special character",
			})
			.regex(/\d/, { message: "Password must contain a number" }),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const watchAllFields = watch();

	const isButtonDisabled =
		!watchAllFields.emailAddress ||
		!watchAllFields.password ||
		Object.keys(errors).length > 0;

	const onSubmit = async (data: any) => {
		setIsLoading(true);
		console.log(data);
		try {
			const response = await fetch(
				"https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/auth/authenticate",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to login");
			}

			const responseData = await response.json();
			console.log(responseData);
			// setTimeout(() => {
			// 	setIsLoading(false);
			// 	toast({
			// 		variant: "success",
			// 		description: "Login successful",
			// 	});
			// 	if (user.role === roles.admin) {
			// 		router.push("/admin/dashboard");
			// 	} else {
			// 		router.push("/book-service");
			// 	}
			// }, 4000);
		} catch (error: any) {
			console.log(error);
			console.error("Error:", error);
		}
		setIsLoading(false);
	};

	console.log(user);

	return (
		<div className="h-screen w-full bg-customGreen flex justify-around items-center px-2">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="h-auto w-[300px] md:w-[450px] bg-white rounded-3xl md:rounded-xl px-8 md:px-14 py-8 md:py-14"
			>
				<div className="flex justify-center">
					<Image src={NavLogo} alt="logo" priority />
				</div>
				<h2 className="text-center text-lg md:text-xl font-semibold">
					Login to your account
				</h2>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-customGreen font-medium text-sm md:text-lg"
					>
						Email
					</label>
					<input
						{...register("emailAddress")}
						name="emailAddress"
						type="email"
						placeholder="Enter a valid email"
						className="text-sm rounded-xl h-[35px] md:h-[40px] border-2 border-customGreen px-3 md:px-5 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customGreen"
					/>
					{errors.emailAddress && (
						<p className="text-sm text-red-500">
							{errors.emailAddress.message as string}
						</p>
					)}
				</div>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="password"
						className="text-customGreen font-medium"
					>
						Password
					</label>
					<input
						{...register("password")}
						name="password"
						type="password"
						placeholder="Enter your password"
						className="text-sm rounded-xl h-[35px] md:h-[40px] border-2 border-customGreen px-3 md:px-5 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customGreen"
					/>
					{errors.password && (
						<p className="text-sm text-red-500">
							{errors.password.message as string}
						</p>
					)}
				</div>
				<div className="mt-5 flex justify-end">
					<Link
						href="/reset-password"
						className="text-customGreen cursor-pointer text-sm"
					>
						Forgot password?
					</Link>
				</div>
				<div className="mt-2 flex justify-end">
					<div className="text-sm">
						Don't have an account?{" "}
						<Link
							href="/register"
							className="text-customGreen cursor-pointer"
						>
							Sign Up
						</Link>
					</div>
				</div>

				<Button
					btnContent={
						isLoading ? (
							<TailSpin
								color="lightGreen"
								height="35px"
								width="50px"
							/>
						) : (
							"Login"
						)
					}
					btnStyles={cn(
						"bg-customGreen hover:bg-lightGreen flex items-center justify-around text-sm md:text-lg text-white rounded-xl cursor-pointer h-[40px] w-full mt-5",
						isButtonDisabled && "opacity-25"
					)}
					btnType="submit"
				/>
			</form>
		</div>
	);
}
