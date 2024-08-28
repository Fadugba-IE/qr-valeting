"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Button from "@/components/landing-page/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { NavLogo } from "@/assets/icons";
import { useToast } from "@/components/ui/use-toast";
import { Suspense } from "react";

export default function VerifyOtp() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get("email");

	const { toast } = useToast();

	const FormSchema = z.object({
		pin: z.string().min(6, {
			message: "Your one-time password must be 6 characters.",
		}),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			pin: "",
		},
	});

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		localStorage.setItem("otp", JSON.stringify(data.pin));
		router.push(`/reset-password/create-new-password?email=${email}`);
	};

	const resendOtp = async () => {
		try {
			const response = await fetch(
				"https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/auth/otp",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
					}),
				}
			);

			const responseData = await response.json();
			console.log(responseData);

			if (responseData.status === "SUCCESS") {
				toast({
					variant: "success",
					description:
						"OTP for password reset has been successfully sent to your email",
				});
			} else if (responseData.status === 400) {
				toast({
					variant: "destructive",
					description: responseData.message,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="auth-bg bg-customGreen md:h-screen md:w-full md:flex justify-around items-center md:px-2">
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="h-auto w-full md:w-[450px] bg-white md:rounded-xl px-8 md:px-14 py-8 md:py-14"
			>
				<div className="flex justify-center">
					<Image src={NavLogo} alt="logo" priority />
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-center text-xl font-semibold">
						Reset your password
					</h2>
					<p className="text-sm text-center text-customGreen">
						Enter 6-digit code we sent to {email}
					</p>
				</div>
				<div className="mt-10 flex flex-col justify-around">
					<Controller
						name="pin"
						control={form.control}
						render={({ field }) => (
							<InputOTP
								maxLength={6}
								value={field.value}
								onChange={field.onChange}
							>
								<InputOTPGroup className="gap-5 md:gap-5">
									{[...Array(6)].map((_, index) => (
										<InputOTPSlot
											key={index}
											index={index}
											className="border rounded-[50%]"
										/>
									))}
								</InputOTPGroup>
							</InputOTP>
						)}
					/>
					{form.formState.errors.pin && (
						<p className="text-red-500 text-sm mt-4 text-center">
							{form.formState.errors.pin.message}
						</p>
					)}
				</div>
				<div className="flex flex-col gap-4 mt-5">
					<Button
						btnContent="Next"
						btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[40px] w-full mt-5"
						btnType="submit"
					/>
					<div className="text-sm text-center">
						Didn't receive code?{" "}
						<button
							className="text-customGreen cursor-pointer"
							type="button"
							onClick={() => resendOtp()}
						>
							Resend
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
