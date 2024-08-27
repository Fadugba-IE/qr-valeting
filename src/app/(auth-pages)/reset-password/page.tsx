"use client";
import { NavLogo } from "@/assets/icons";
import Button from "@/components/landing-page/Button";
import { useToast } from "@/components/ui/use-toast";
import { AuthContext } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import { z } from "zod";

export default function ResetPassword() {
	const { toast } = useToast();
	const router = useRouter();
	const { isLoading, setIsLoading, setUserData } = useContext(AuthContext);

	const schema = z.object({
		emailAddress: z
			.string()
			.min(1, { message: "Email is required" })
			.email({ message: "Invalid email address" })
			.refine((val) => val.includes("@") && val.endsWith(".com"), {
				message: "Email must include '@' and end with '.com'",
			}),
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
		!watchAllFields.emailAddress || Object.keys(errors).length > 0;

	const onSubmit = async (data: any) => {
		setIsLoading(true);

		try {
			const response = await fetch(
				"https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/auth/otp",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: data.emailAddress,
					}),
				}
			);

			const responseData = await response.json();
			console.log(responseData);

			if (responseData.status === "SUCCESS") {
				setIsLoading(false);
				toast({
					variant: "success",
					description:
						"OTP for password reset has been successfully sent to your email",
				});
				setTimeout(
					() =>
						router.push(
							`/reset-password/verify-otp?email=${data.emailAddress}`
						),
					2000
				);
			} else if (responseData.status === 400) {
				toast({
					variant: "destructive",
					description: responseData.message,
				});
			}
		} catch (error) {
			console.log(error);
		}
		// setTimeout(() => setIsLoading(false), 3000);
	};

	return (
		<div className="auth-bg bg-customGreen md:h-screen md:w-full md:flex justify-around items-center md:px-2">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="h-auto w-full md:w-[450px] bg-white md:rounded-xl px-8 md:px-14 py-8 md:py-14"
			>
				<div className="flex justify-center">
					<Image src={NavLogo} alt="logo" priority />
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-center text-xl font-semibold">
						Reset your password
					</h2>
					<p className="text-sm text-customGreen">
						Enter the email address registered with your account
					</p>
				</div>
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
						type="email"
						placeholder="Enter a valid email"
						className="text-sm rounded-xl h-[40px] border-2 border-customGreen px-3 md:px-5 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customGreen"
					/>
					{errors.emailAddress && (
						<p className="text-sm text-red-500">
							{errors.emailAddress.message as string}
						</p>
					)}
				</div>
				<div className="flex flex-col gap-4 mt-7">
					<Button
						btnContent={
							isLoading ? (
								<TailSpin
									color="lightGreen"
									height="35px"
									width="50px"
								/>
							) : (
								"Next"
							)
						}
						btnStyles={cn(
							"bg-customGreen hover:bg-lightGreen flex items-center justify-around text-sm md:text-lg text-white rounded-xl cursor-pointer h-[40px] w-full mt-5",
							isButtonDisabled && "opacity-25"
						)}
						btnType="submit"
					/>
					<div className="text-sm text-center">
						<Link
							href="/login"
							className="text-customGreen cursor-pointer"
						>
							Go back to login
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
