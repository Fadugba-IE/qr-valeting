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
	};

	console.log(userData);

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
}
