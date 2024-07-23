"use client";
// import { roles } from "@/lib/utils";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type AuthContext = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	userData: UserInfo | null;
	setUserData: Dispatch<SetStateAction<UserInfo | null>>;
};

export const AuthContext = createContext({} as AuthContext);

export default function AuthContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [userData, setUserData] = useState<UserInfo | null>(null);

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
