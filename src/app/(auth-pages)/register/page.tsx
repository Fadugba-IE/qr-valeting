"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import Button from "@/components/landing-page/Button";
import Spinner from "../_components/Spinner";
import Image from "next/image";
import { NavLogo } from "@/assets/icons";

export default function SignUp() {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const schema = z.object({
		fullName: z.string().min(1, { message: "Full name is required" }),
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
		!watchAllFields.fullName ||
		!watchAllFields.emailAddress ||
		!watchAllFields.password ||
		Object.keys(errors).length > 0;

	const onSubmit = (data: any) => {
		setIsLoading(true);
		console.log(data);
		setTimeout(() => {
			setIsLoading(false);
			toast({
				description: "Account created successfully✅",
			});
			reset();
		}, 5000);
	};

	return (
		<div className="h-[100vh] md:h-[130vh] w-full bg-customGreen flex justify-around items-center px-2">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="h-auto w-[300px] md:w-[450px] bg-white rounded-3xl md:rounded-xl px-6 md:px-14 py-8 md:py-14"
			>
				<div className="flex justify-center">
					<Image src={NavLogo} alt="logo" className="" />
				</div>
				<h2 className="text-center text-lg md:text-xl font-semibold">
					Create an account
				</h2>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="fullName"
						className="text-customGreen font-medium text-sm md:text-lg"
					>
						Full name
					</label>
					<input
						{...register("fullName")}
						name="fullName"
						type="text"
						placeholder="Enter your full name"
						className="text-sm rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 placeholder:text-sm"
					/>
					{errors.fullName && (
						<p className="text-sm text-red-500">
							{errors.fullName.message as string}
						</p>
					)}
				</div>
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
						className="text-sm rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 placeholder:text-sm"
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
						className="text-customGreen font-medium text-sm md:text-lg"
					>
						Password
					</label>
					<input
						{...register("password")}
						name="password"
						type="password"
						placeholder="Enter your password"
						className="text-sm rounded-3xl h-[35px] md:h-[40px] border border-customGreen px-5 placeholder:text-sm"
					/>
					{errors.password && (
						<p className="text-sm text-red-500">
							{errors.password.message as string}
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
					btnContent={isLoading ? <Spinner /> : "Sign up"}
					btnStyles={cn(
						"bg-customGreen hover:bg-lightGreen text-sm md:text-lg text-white rounded-3xl cursor-pointer h-[40px] w-full mt-5",
						isButtonDisabled && "opacity-25"
					)}
					btnType="submit"
				/>
			</form>
		</div>
	);
}
