"use client";
import { useState } from "react";
import Button from "@/components/landing-page/Button";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Spinner from "../_components/Spinner";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState<boolean>();
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

	const watchAllFields = watch(); // Watch all fields

	const isButtonDisabled =
		!watchAllFields.emailAddress ||
		!watchAllFields.password ||
		Object.keys(errors).length > 0;

	const onSubmit = (data: any) => {
		setIsLoading(true);
		console.log(data);
		reset();
		setTimeout(() => {
			setIsLoading(false);
			toast({
				description: "Login successful",
			});
		}, 5000);
	};

	return (
		<div className="h-screen w-full bg-customGreen flex justify-around items-center">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="h-auto w-[450px] bg-white rounded-xl px-14 py-14"
			>
				<h2 className="text-center text-xl font-semibold">
					Login to your account
				</h2>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-customGreen font-medium"
					>
						Email
					</label>
					<input
						{...register("emailAddress")}
						name="emailAddress"
						type="text"
						placeholder="tim@gmail.com"
						className="text-sm rounded-3xl h-[40px] border border-customGreen px-5"
					/>
					{errors.emailAddress && (
						<p className="text-sm text-red-500">
							{errors.emailAddress.message as string}
						</p>
					)}
				</div>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-customGreen font-medium"
					>
						Password
					</label>
					<input
						{...register("password")}
						name="password"
						type="text"
						placeholder="Enter your password"
						className="text-sm rounded-3xl h-[40px] border border-customGreen px-5"
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
				<div className="mt-1 flex justify-end">
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
					btnContent={isLoading ? <Spinner /> : "Login"}
					btnStyles={cn(
						"bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[40px] w-full mt-5",
						isButtonDisabled && "opacity-25"
					)}
					btnType="submit"
				/>
			</form>
		</div>
	);
}
