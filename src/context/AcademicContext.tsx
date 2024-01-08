import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AcademicApi from "../api/AcademicApi";
import { AcademicProps } from "../types/Academic.types";

interface AcademicContextProps {
	data: AcademicProps;
	isLoading: boolean;
	updateData: (data: AcademicProps) => Promise<void>;
}

interface AcademicProviderProps {
	children: React.ReactNode;
}

export const AcademicContext = createContext<AcademicContextProps>({
	data: {
		title: "",
		description: "",
		items: []
	},
	updateData: async () => {},
	isLoading: true
});

export const AcademicProvider = ({ children }: AcademicProviderProps) => {
	const [data, setData] = useState<AcademicProps>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		setIsLoading(true);

		const [details, list] = await Promise.all([AcademicApi.getAcademicDetails(), AcademicApi.getAcademicList()]);

		setData({
			title: details.title,
			description: details.description,
			items: list
		});
		setIsLoading(false);
	};

	const updateData = async (data: AcademicProps) => {
		try {
			await AcademicApi.updateAcademic(data);
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

	return <AcademicContext.Provider value={value}>{children}</AcademicContext.Provider>;
};
