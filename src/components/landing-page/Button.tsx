type ButtonProps = {
	btnContent: string;
	btnStyles: string;
	btnType?: "submit" | "reset" | "button" | undefined;
	handleSubmit?: any;
};

export default function Button({
	btnContent,
	btnStyles,
	btnType,
	handleSubmit,
}: ButtonProps) {
	return (
		<button className={btnStyles} type={btnType} onClick={handleSubmit}>
			{btnContent}
		</button>
	);
}
