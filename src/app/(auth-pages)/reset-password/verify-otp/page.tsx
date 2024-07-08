"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/landing-page/Button";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyOtp() {
	const router = useRouter();

	return (
		<div className="h-screen w-full bg-customGreen flex justify-around items-center">
			<form className="h-[450px] w-[450px] bg-white rounded-xl px-14 py-14">
				<div className="flex flex-col gap-2">
					<h2 className="text-center text-xl font-semibold">
						Reset your password
					</h2>
					<p className="text-sm text-customGreen">
						Enter 4-digit code we sent to tim@gmail.com
					</p>
				</div>
				<div className="mt-10 flex justify-around">
					<InputOTP
						maxLength={4}
						pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
					>
						<InputOTPGroup className="gap-5">
							<InputOTPSlot
								index={0}
								className="border rounded-[50%]"
							/>
							<InputOTPSlot
								index={1}
								className="border rounded-[50%]"
							/>
							<InputOTPSlot
								index={2}
								className="border rounded-[50%]"
							/>
							<InputOTPSlot
								index={3}
								className="border rounded-[50%]"
							/>
						</InputOTPGroup>
					</InputOTP>
				</div>
				<div className="flex flex-col gap-4 mt-7">
					<Button
						btnContent="Reset Password"
						btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[40px] w-full mt-5"
						btnType="button"
						handleSubmit={() =>
							router.push("/reset-password/create-new-password")
						}
					/>
					<div className="text-sm text-center">
						Didn't receive code?{" "}
						<Link
							href="/login"
							className="text-customGreen cursor-pointer"
						>
							Resend
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
