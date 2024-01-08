import { useEffect, useState } from "react";
import { useAcademic } from "../../context/AcademicContext.hooks";
import { AcademicDetailsProps } from "../../types/Academic.types";

export default function EditAcademic() {
	const { data: academicData, updateData } = useAcademic();

	const [title, setTitle] = useState<AcademicDetailsProps["title"]>("");
	const [description, setDescription] = useState<AcademicDetailsProps["description"]>("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await updateData({
				title,
				description
			});
		} catch (error) {
			console.log("error ", error);
		}
	};

	useEffect(() => {
		setTitle(academicData?.title ?? "");
		setDescription(academicData?.description ?? "");
	}, [academicData]);

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
						<h2 className="text-base font-semibold leading-7 text-gray-900">Formação Acadêmica</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Essas informações serão exibidas publicamente, então tenha cuidado com o que você compartilha.
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<label
									htmlFor="title"
									className="block text-sm font-medium leading-6 text-gray-900">
									Título
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600 sm:max-w-md">
										<input
											type="text"
											name="title"
											id="title"
											autoComplete="title"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="Digite o título"
											value={title}
											onChange={(event) => setTitle(event.target.value)}
										/>
									</div>
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
										rows={5}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
										onChange={(event) => setDescription(event.target.value)}
										value={description}
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
