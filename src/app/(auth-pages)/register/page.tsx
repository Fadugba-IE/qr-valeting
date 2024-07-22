"use client";
import { useState } from "react";
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

export default function SignUp() {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState<boolean>(false);

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

	const onSubmit = (data: any) => {
		setIsLoading(true);
		console.log(data);
		setTimeout(() => {
			setIsLoading(false);
			toast({
				description: "Account created successfully",
			});
			reset();
		}, 5000);
	};

	return (
		<div className="h-[100vh] md:h-auto w-full py-20 bg-customGreen flex justify-around items-center px-2">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="h-auto w-[300px] md:w-[450px] bg-white rounded-3xl md:rounded-xl px-8 md:px-14 py-8 md:py-14"
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
