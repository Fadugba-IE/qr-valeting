type ButtonProps = {
	btnContent: string;
	btnStyles: string;
	btnType?: "submit" | "reset" | "button" | undefined;
};

export default function Button({
	btnContent,
	btnStyles,
	btnType,
}: ButtonProps) {
	return (
		<button className={btnStyles} type={btnType}>
			{btnContent}
		</button>
	);
}
