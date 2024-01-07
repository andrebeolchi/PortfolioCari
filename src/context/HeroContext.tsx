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
    imageUrl: "",
	},
	updateData: async () => {},
	isLoading: true
});

export const HeroProvider = ({ children }: HeroProviderProps) => {
	const [data, setData] = useState<HeroProps>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		setIsLoading(true);
		const response = await HeroApi.getHero();

		console.log("res ", response);

		setData(response);
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

	const value = {
		data,
		updateData,
		isLoading
	};

	return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
};
