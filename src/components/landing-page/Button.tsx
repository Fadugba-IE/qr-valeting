import { ReactNode } from "react";

type ButtonProps = {
	btnContent: ReactNode;
	btnStyles: string;
	btnType?: "submit" | "reset" | "button" | undefined;
	handleSubmit?: () => void;
	isDisabled?: boolean;
};

export default function Button({
	btnContent,
	btnStyles,
	btnType,
	handleSubmit,
	isDisabled,
}: ButtonProps) {
	return (
		<button
			className={btnStyles}
			type={btnType}
			onClick={handleSubmit}
			disabled={isDisabled}
		>
			{btnContent}
		</button>
	);
}
