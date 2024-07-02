import Button from "@/components/landing-page/Button";

export default function Login() {
	return (
		<div className="h-screen w-full bg-customGreen flex justify-around items-center">
			<form className="h-[450px] w-[450px] bg-white rounded-xl px-14 py-14">
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
						type="text"
						placeholder="tim@gmail.com"
						className="rounded-3xl h-[40px] border border-customGreen px-5"
					/>
				</div>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-customGreen font-medium"
					>
						Password
					</label>
					<input
						type="text"
						placeholder="Enter your password"
						className="rounded-3xl h-[40px] border border-customGreen px-5"
					/>
				</div>
				<div className="mt-4 flex justify-end">
					<p className="text-customGreen">Forgot password?</p>
				</div>
				<Button
					btnContent="Login"
					btnStyles="bg-customGreen hover:bg-lightGreen text-white rounded-3xl cursor-pointer h-[40px] w-full mt-10"
					btnType="button"
				/>
			</form>
		</div>
	);
}
