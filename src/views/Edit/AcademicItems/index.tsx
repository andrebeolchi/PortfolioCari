import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAcademic } from "../../../context/AcademicContext.hooks";
import { AcademicItemProps } from "../../../types/Academic.types";

export default function EditAcademicItems() {
	const { id } = useParams<{ id: string }>();

	const { data: academicData, updateItem, createItem } = useAcademic();

	const [academic, setAcademic] = useState<AcademicItemProps>({
		title: "",
		category: "",
		imageUrl: "",
		date: "",
		subtitle: ""
	});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			if (id === "new") {
				await createItem(academic);
				return;
			}

			await updateItem(academic);
		} catch (error) {
			console.log("error ", error);
		}
	};

	useEffect(() => {
		if (id !== "new") {
			const item = academicData?.items?.find((item) => item.id === id);

			if (item) {
				setAcademic(item);
			}
		}
	}, [academicData, id]);

	if (!academicData) {
		return null;
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<form
				method="POST"
				onSubmit={handleSubmit}>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							{id === "new" ? "Adicionar Formação" : "Editar Formação"}
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Essas informações serão exibidas publicamente, então tenha cuidado com o que você compartilha.
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<label
									htmlFor="title"
									className="block text-sm font-medium leading-6 text-gray-900">
									Título*
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600 sm:max-w-md">
										<input
											type="text"
											name="title"
											id="title"
											autoComplete="title"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="Ex: Faculdade XPTO"
											value={academic?.title}
											required
											onChange={(event) => setAcademic({ ...academic, title: event.target.value })}
										/>
									</div>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="category"
									className="block text-sm font-medium leading-6 text-gray-900">
									Categoria*
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600 sm:max-w-md">
										<input
											type="text"
											name="category"
											id="category"
											autoComplete="category"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="Ex: Graduação X"
											value={academic?.category}
											required
											onChange={(event) => setAcademic({ ...academic, category: event.target.value })}
										/>
									</div>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="date"
									className="block text-sm font-medium leading-6 text-gray-900">
									Data*
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600 sm:max-w-md">
										<input
											type="text"
											name="date"
											id="date"
											autoComplete="date"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="Ex: 2022 - 2024"
											value={academic?.date}
											required
											onChange={(event) => setAcademic({ ...academic, date: event.target.value })}
										/>
									</div>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="photo"
									className="block text-sm font-medium leading-6 text-gray-900">
									Foto
								</label>
								<div className="mt-2 flex items-center gap-x-3">
									{(academic?.inputedImage || academic?.imageUrl) && (
										<img
											className="h-10 w-auto"
											src={academic?.inputedImage ? URL.createObjectURL(academic?.inputedImage) : academic?.imageUrl}
										/>
									)}
									<label
										htmlFor="file-upload"
										className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
										<span>{academic?.inputedImage || academic?.imageUrl ? "Mudar" : "Adicionar"}</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
											onChange={(event) => setAcademic({ ...academic, inputedImage: event.target.files[0] })}
										/>
									</label>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="description"
									className="block text-sm font-medium leading-6 text-gray-900">
									Descrição
								</label>
								<div className="mt-2">
									<textarea
										id="description"
										name="description"
										rows={3}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
										onChange={(event) => setAcademic({ ...academic, subtitle: event.target.value })}
										value={academic.subtitle}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						type="submit"
						className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
						Salvar
					</button>
				</div>
			</form>
		</div>
	);
}
