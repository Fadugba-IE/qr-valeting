"use client";
import { roles } from "@/lib/utils";
import { createContext, useState } from "react";

type User = {
	role: string;
};

type AuthContext = {
	user: User;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext({} as AuthContext);

export default function AuthContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const user = {
		role: roles.admin,
	};

	const authContextValue = {
		user,
		isLoading,
		setIsLoading,
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
}
