import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

interface AuthContextProps {
	isAuthenticated: boolean;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: false
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log("logado");
				setIsAuthenticated(true);
			} else {
				console.log("deslogado");
				setIsAuthenticated(false);
			}
		});
	}, []);

	const value = {
		isAuthenticated
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
