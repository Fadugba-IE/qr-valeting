"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import Button from "@/components/landing-page/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TailSpin } from "react-loader-spinner";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { NavLogo } from "@/assets/icons";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z
	.object({
		password: z
			.string()
			.min(1, { message: "Password is required" })
			.min(6, { message: "Password must be more than 6 characters" })
			.regex(/[!@#$%^&*(),.?":{}|<>]/, {
				message: "Password must contain a special character",
			})
			.regex(/\d/, { message: "Password must contain a number" }),
		newPassword: z
			.string()
			.min(1, { message: "Password is required" })
			.min(6, { message: "Password must be more than 6 characters" })
			.regex(/[!@#$%^&*(),.?":{}|<>]/, {
				message: "Password must contain a special character",
			})
			.regex(/\d/, { message: "Password must contain a number" }),
	})
	.refine((data) => data.password === data.newPassword, {
		message: "New password must match the current password",
		path: ["newPassword"],
	});

type FormData = z.infer<typeof FormSchema>;

export default function CreateNewPassword() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get("email");

	const [pin, setPin] = useState("");
	const { toast } = useToast();

	const { isLoading, setIsLoading } = useContext(AuthContext);

	useEffect(() => {
		const otp = localStorage.getItem("otp");
		if (otp) {
			const otpPin = JSON.parse(otp);
			setPin(otpPin);
		}
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(FormSchema),
	});

	const watchAllFields = watch();

	const isButtonDisabled =
		!watchAllFields.password ||
		!watchAllFields.newPassword ||
		Object.keys(errors).length > 0;

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/auth/reset/password",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						otp: pin,
						password: data.newPassword,
					}),
				}
			);
			const responseData = await response.json();
			if (responseData.status === "SUCCESS") {
				setIsLoading(false);
				toast({
					variant: "success",
					description: "Password reset successfull",
				});
				setTimeout(() => {
					router.push("/login");
				}, 2000);
				router.push;
			} else if (responseData.status === 400) {
				setIsLoading(false);
				toast({
					variant: "destructive",
					description: responseData.message,
				});
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<div className="auth-bg bg-customGreen md:h-screen md:w-full md:flex justify-around items-center md:px-2">
			<form
				className="h-auto w-full md:w-[450px] bg-white md:rounded-xl px-8 md:px-14 py-8 md:py-14"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex justify-center">
					<Image src={NavLogo} alt="logo" priority />
				</div>
				<div className="">
					<h2 className="text-center text-lg md:text-xl font-semibold">
						Create a new password
					</h2>

					<div className="mt-5 flex flex-col gap-2">
						<label
							htmlFor="password"
							className="text-customGreen font-medium"
						>
							Enter New Password
						</label>
						<input
							{...register("password")}
							name="password"
							type="password"
							placeholder="Enter here"
							className="text-sm rounded-xl h-[40px] border-2 border-customGreen px-3 md:px-5 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customGreen"
						/>
						{errors.password && (
							<p className="text-sm text-red-500">
								{errors.password.message as string}
							</p>
						)}
					</div>
					<div className="mt-5 flex flex-col gap-2">
						<label
							htmlFor="newPassword"
							className="text-customGreen font-medium"
						>
							Confirm new password
						</label>
						<input
							{...register("newPassword")}
							name="newPassword"
							type="password"
							placeholder="Enter here"
							className="text-sm rounded-xl h-[40px] border-2 border-customGreen px-3 md:px-5 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customGreen"
						/>
						{errors.newPassword && (
							<p className="text-sm text-red-500">
								{errors.newPassword.message as string}
							</p>
						)}
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
								"Change Password"
							)
						}
						btnStyles={cn(
							"bg-customGreen hover:bg-lightGreen flex items-center justify-around text-sm md:text-lg text-white rounded-xl cursor-pointer h-[40px] w-full mt-8",
							isButtonDisabled && "opacity-25"
						)}
						btnType="submit"
					/>
				</div>
			</form>
		</div>
	);
}
