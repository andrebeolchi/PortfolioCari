import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import HeroApi from "../api/HeroApi";
import { HeroProps } from "../types/Hero.types";

interface HeroContextProps {
	data: HeroProps;
	isLoading: boolean;
	updateData: (data: HeroProps) => Promise<void>;
}

interface HeroProviderProps {
	children: React.ReactNode;
}

export const HeroContext = createContext<HeroContextProps>({
	data: {
		title: "",
		subtitle: "",
		image: ""
	},
	updateData: async () => {},
	isLoading: true
});

export const HeroProvider = ({ children }: HeroProviderProps) => {
	const [data, setData] = useState<HeroProps>({
		title: "",
		subtitle: "",
		image: ""
	});
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		setIsLoading(true);
		const response = await HeroApi.getHero();

		if (response) {
			setData(response);
		}

		setIsLoading(false);
	};

	const updateData = async (data: HeroProps) => {
		try {
			await HeroApi.updateHero(data);
			toast.success("Dados atualizados com sucesso!");
		} catch (error) {
			toast.error("Ocorreu um erro ao atualizar os dados!");
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<HeroContext.Provider
			value={{
				data,
				updateData,
				isLoading
			}}>
			{children}
		</HeroContext.Provider>
	);
};
