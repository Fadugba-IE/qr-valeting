"use client";
import Button from "@/components/landing-page/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
	const router = useRouter();

	return (
		<div className="h-screen w-full bg-customGreen flex justify-around items-center">
			<form className="h-[450px] w-[450px] bg-white rounded-xl px-14 py-14">
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
						type="text"
						placeholder="tim@gmail.com"
						className="text-sm rounded-3xl h-[40px] border border-customGreen px-5"
					/>
				</div>
				<div className="flex flex-col gap-4 mt-7">
					<Button
						btnContent="Next"
						btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[40px] w-full mt-5"
						btnType="button"
						handleSubmit={() =>
							router.push("/reset-password/verify-otp")
						}
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
