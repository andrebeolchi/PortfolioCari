import { TrashIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFooter } from "../../../context/Footer/FooterContext.hooks";
import { FooterGroup } from "../../../types/Footer";

export default function EditFooterItems() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const [groups, setGroups] = useState<FooterGroup[]>([]);

	const { data: footer, upsertData } = useFooter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("groups ", groups);

		try {
			await upsertData(groups);

			navigate("/edit/footer");
		} catch (error) {
			console.log("error ", error);
		}
	};

	useEffect(() => {
		if (footer) {
			setGroups(footer);
		}
	}, [footer, id]);

	if (!footer) {
		return null;
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<form
				method={"POST"}
				onSubmit={handleSubmit}>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<div className="flex flex-1 flex-row justify-between items-center">
							<div>
								<h2 className="text-base font-semibold leading-7 text-gray-900">Informações do Rodapé</h2>
								<p className="mt-1 text-sm leading-6 text-gray-600">
									Essas informações serão exibidas publicamente, então tenha cuidado com o que você compartilha.
								</p>
							</div>
							<div>
								<button
									type="button"
									onClick={() => setGroups([...groups, { title: "", items: [{ title: "", href: "" }] }])}
									className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
									Novo Grupo
								</button>
							</div>
						</div>

						{groups?.map((group, groupIndex) => (
							<div
								key={groupIndex}
								className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white rounded-xl shadow-xl ring-1 ring-gray-400/10 p-4">
								<div className="sm:col-span-full">
									<label
										htmlFor="title"
										className="block text-sm font-medium leading-6 text-gray-900">
										Título*
									</label>
									<div className="mt-2 flex flex-row flex-1 justify-between">
										<div className="flex-1 flex flex-row mr-2.5">
											<button
												type="button"
												className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 bg-red-400/10 mr-2.5"
												onClick={() => {
													const groupsCopy = [...groups];
													groupsCopy.splice(groupIndex, 1);
													setGroups(groupsCopy);
												}}>
												<TrashIcon className="h-5 w-5 text-red-600" />
											</button>
											<div className="flex flex-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600">
												<input
													type="text"
													name="title"
													id="title"
													autoComplete="title"
													className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
													placeholder="Ex: Faculdade XPTO"
													value={group.title}
													required
													onChange={(event) => {
														const groupsCopy = [...groups];
														groupsCopy[groupIndex].title = event.target.value;
														setGroups(groupsCopy);
													}}
												/>
											</div>
										</div>
										<div>
											<button
												className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
												onClick={() => {
													const groupsCopy = [...groups];
													groupsCopy[groupIndex].items.push({ title: "", href: "" });
													setGroups(groupsCopy);
												}}>
												Novo Item
											</button>
										</div>
									</div>
								</div>

								<div className="sm:col-span-full">
									<label
										htmlFor="title"
										className="block text-sm font-medium leading-6 text-gray-900">
										Itens*
									</label>
									{group.items?.map((item, groupItemIndex) => (
										<div
											className="flex flex-row flex-1 mt-2"
											key={groupItemIndex}>
											<button
												type="button"
												className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 bg-red-400/10 mr-2.5"
												onClick={() => {
													const groupsCopy = [...groups];
													groupsCopy[groupIndex].items.splice(groupItemIndex, 1);
													setGroups(groupsCopy);
												}}>
												<TrashIcon className="h-5 w-5 text-red-600" />
											</button>
											<div className="flex flex-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600 mr-2.5">
												<input
													type="text"
													name="title"
													id="title"
													autoComplete="title"
													className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
													placeholder="Título do item"
													value={item?.title}
													required
													onChange={(event) => {
														const groupsCopy = [...groups];
														groupsCopy[groupIndex].items[groupItemIndex].title = event.target.value;
														setGroups(groupsCopy);
													}}
												/>
											</div>
											<div className="flex flex-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600">
												<input
													type="text"
													name="link"
													id="link"
													autoComplete="link"
													className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
													placeholder="Link do item"
													value={item.href}
													required
													onChange={(event) => {
														const groupsCopy = [...groups];
														groupsCopy[groupIndex].items[groupItemIndex].href = event.target.value;
														setGroups(groupsCopy);
													}}
												/>
											</div>
										</div>
									))}
									{group.items?.length === 0 && (
										// Empty State Message
										<div className="flex flex-row flex-1 mt-2">
											<div className="flex flex-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600 mr-2.5">
												<span className="block flex-1 border-0 bg-transparent py-1.5 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-center">
													Nenhum item adicionado
												</span>
											</div>
										</div>
									)}
								</div>
							</div>
						))}
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
