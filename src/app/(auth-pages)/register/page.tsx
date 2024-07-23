"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import Button from "@/components/landing-page/Button";
import { TailSpin } from "react-loader-spinner";
import Image from "next/image";
import { NavLogo } from "@/assets/icons";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignUp() {
	const { toast } = useToast();
	const { isLoading, setIsLoading } = useContext(AuthContext);
	const router = useRouter();
	const schema = z.object({
		firstname: z.string().min(1, { message: "Firstname is required" }),
		lastname: z.string().min(1, { message: "Lastname is required" }),
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
		role: z.enum(["ADMIN", "USER"], {
			message: "Role must be either ADMIN or USER",
		}),
	});

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const watchAllFields = watch();

	const isButtonDisabled =
		!watchAllFields.firstname ||
		!watchAllFields.lastname ||
		!watchAllFields.emailAddress ||
		!watchAllFields.password ||
		!watchAllFields.role ||
		Object.keys(errors).length > 0;

	const onSubmit = async (data: any) => {
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						firstname: data.firstname,
						lastname: data.lastname,
						email: data.emailAddress,
						password: data.password,
						role: data.role,
					}),
				}
			);

			const responseData = await response.json();
			console.log(responseData);

			if (responseData.status === "SUCCESS") {
				setIsLoading(false);
				toast({
					variant: "success",
					description: "Account created successfully",
				});
				router.push("/login");
			} else if (responseData.status === 400) {
				toast({
					variant: "destructive",
					description: responseData.message,
				});
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	return (
		<div className="h-auto w-full md:py-20 md:bg-customGreen md:flex justify-around items-center md:px-2">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="h-auto w-full md:w-[450px] bg-white  md:rounded-xl px-8 md:px-14 py-8 md:py-14"
			>
				<div className="flex justify-center">
					<Image src={NavLogo} alt="logo" className="" />
				</div>
				<h2 className="text-center text-lg md:text-xl font-semibold">
					Create an account
				</h2>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="firstname"
						className="text-customGreen font-medium text-sm md:text-lg"
					>
						Firstname
					</label>
					<input
						{...register("firstname")}
						name="firstname"
						type="text"
						placeholder="Enter your firstname"
						className="text-sm rounded-xl h-[35px] md:h-[40px] border-2 border-customGreen px-3 md:px-5 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customGreen"
					/>
					{errors.firstname && (
						<p className="text-sm text-red-500">
							{errors.firstname.message as string}
						</p>
					)}
				</div>
				<div className="mt-4 flex flex-col gap-2">
					<label
						htmlFor="lastname"
						className="text-customGreen font-medium text-sm md:text-lg"
					>
						Lastname
					</label>
					<input
						{...register("lastname")}
						name="lastname"
						type="text"
						placeholder="Enter your lastname"
						className="text-sm rounded-xl h-[35px] md:h-[40px] border-2 border-customGreen px-3 md:px-5 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customGreen"
					/>
					{errors.lastname && (
						<p className="text-sm text-red-500">
							{errors.lastname.message as string}
						</p>
					)}
				</div>
				<div className="mt-4 flex flex-col gap-2">
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
				<div className="mt-4 flex flex-col gap-2">
					<label
						htmlFor="password"
						className="text-customGreen font-medium text-sm md:text-lg"
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
				<div className="mt-4 flex flex-col gap-2">
					<label
						htmlFor="role"
						className="text-customGreen font-medium text-sm md:text-lg"
					>
						Role
					</label>
					<Controller
						name="role"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<Select
								value={field.value}
								onValueChange={(value) => field.onChange(value)}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a role" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="USER">User</SelectItem>
									<SelectItem value="ADMIN">Admin</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
					{errors.role && (
						<p className="text-sm text-red-500">
							{errors.role.message as string}
						</p>
					)}
				</div>
				<div className="mt-8 flex justify-end">
					<div className="text-sm">
						Already have an account?{" "}
						<Link
							href="/login"
							className="text-customGreen cursor-pointer text-sm"
						>
							Login
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
							"Sign up"
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
