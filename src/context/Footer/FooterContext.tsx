import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import FooterApi from "../../api/FooterApi";
import { FooterGroup } from "../../types/Footer";

interface FooterContextProps {
	data?: FooterGroup[];
	isLoading: boolean;
	upsertData: (data: FooterGroup[]) => Promise<void>;
}

interface FooterProviderProps {
	children: React.ReactNode;
}

export const FooterContext = createContext<FooterContextProps>({
	data: [],
	upsertData: async () => {},
	isLoading: true
});

export const FooterProvider = ({ children }: FooterProviderProps) => {
	const [data, setData] = useState<FooterGroup[]>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		setIsLoading(true);

		const list = await FooterApi.getFooterLists();

		setData(list ?? []);
		setIsLoading(false);
	};

	const upsertData = async (data: FooterGroup[]) => {
		try {
			console.log("data ", data);

			await FooterApi.upsertFooterLists(data);
			toast.success("Dados atualizados com sucesso!");
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
				upsertData
			}}>
			{children}
		</FooterContext.Provider>
	);
};
