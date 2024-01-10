import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import FooterApi from "../../api/FooterApi";
import { FooterGroup, FooterSocial } from "../../types/Footer";

interface FooterContextProps {
	data?: FooterData;
	isLoading: boolean;
	upsertData: (data: FooterGroup[]) => Promise<void>;
	updateSocial: (data: FooterSocial) => Promise<void>;
}

interface FooterData {
	list: FooterGroup[];
	social: FooterSocial;
}

interface FooterProviderProps {
	children: React.ReactNode;
}

export const FooterContext = createContext<FooterContextProps>({
	data: undefined,
	upsertData: async () => {},
	updateSocial: async () => {},
	isLoading: true
});

export const FooterProvider = ({ children }: FooterProviderProps) => {
	const [data, setData] = useState<FooterData>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		setIsLoading(true);

		const [list, social] = await Promise.all([FooterApi.getFooterLists(), FooterApi.getFooterSocial()]);

		if (list) {
			setData({
				list,
				social: social as FooterSocial
			});
		}

		setIsLoading(false);
	};

	const upsertData = async (data: FooterGroup[]) => {
		try {
			console.log("data ", data);

			await FooterApi.upsertFooterLists(data);
			toast.success("As listas foram atualizadas com sucesso!");
		} catch (error) {
			toast.error("Ocorreu um erro ao atualizar os dados!");
		}
	};

	const updateSocial = async (data: FooterSocial) => {
		try {
			await FooterApi.updateFooterSocial(data);
			toast.success("Suas mídias sociais foram atualizadas com sucesso!");
		} catch (error) {
			toast.error("Ocorreu um erro ao atualizar os dados!");
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<FooterContext.Provider
			value={{
				data,
				isLoading,
				upsertData,
				updateSocial
			}}>
			{children}
		</FooterContext.Provider>
	);
};
