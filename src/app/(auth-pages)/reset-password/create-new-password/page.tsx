"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/landing-page/Button";

export default function CreateNewPassword() {
	const router = useRouter();

	return (
		<div className="h-screen w-full bg-customGreen flex justify-around items-center">
			<form className="h-[450px] w-[450px] bg-white rounded-xl px-14 py-14">
				<div className="flex flex-col gap-2">
					<h2 className="text-center text-xl font-semibold">
						Create a new password
					</h2>
				</div>
				<div className="mt-7 flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-customGreen font-medium"
					>
						Enter new password
					</label>
					<input
						type="text"
						placeholder="Enter your password"
						className="rounded-3xl text-sm h-[40px] border border-customGreen px-5"
					/>
				</div>
				<div className="mt-8 flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-customGreen font-medium"
					>
						Confirm new password
					</label>
					<input
						type="text"
						placeholder="Enter your password"
						className="rounded-3xl text-sm h-[40px] border border-customGreen px-5"
					/>
				</div>
				<Button
					btnContent="Change password"
					btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[40px] w-full mt-10"
					btnType="button"
					handleSubmit={() => router.push("/login")}
				/>
			</form>
		</div>
	);
}
