import Button from "@/components/landing-page/Button";

export default function SignUp() {
	return (
		<div className="h-[120vh] w-full bg-customGreen flex justify-around items-center">
			<form className="h-auto w-[450px] bg-white rounded-xl px-14 py-14">
				<h2 className="text-center text-xl font-semibold">
					Create an account
				</h2>
				<div className="mt-5 flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-customGreen font-medium"
					>
						First name
					</label>
					<input
						type="text"
						placeholder="Jimmy"
						className="rounded-3xl h-[40px] border border-customGreen px-5"
					/>
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
						type="password"
						placeholder="Enter your password"
						className="rounded-3xl h-[40px] border border-customGreen px-5"
					/>
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
