"use client";
import {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";

type AuthContextType = {
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	userData: UserInfo | null;
	setUserData: Dispatch<SetStateAction<UserInfo | null>>;
	searchBookingsText: string;
	setSearchBookingsText: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>(
	{} as AuthContextType
);

export default function AuthContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [userData, setUserData] = useState<UserInfo | null>(null);
	const [searchBookingsText, setSearchBookingsText] = useState("");

	useEffect(() => {
		const data = localStorage.getItem("user");
		if (data) {
			setUserData(JSON.parse(data));
		}
	}, []);

	const authContextValue = {
		isLoading,
		setIsLoading,
		userData,
		setUserData,
		searchBookingsText,
		setSearchBookingsText,
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
}
