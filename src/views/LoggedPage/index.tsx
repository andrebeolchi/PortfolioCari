import { useEffect, useState } from "react";
import { useHero } from "../../context/HeroContext.hooks";
import { HeroProps } from "../../types/Hero.types";

export default function LoggedPage() {
	const { data: details, updateData } = useHero();

	console.log("details ", details);

	const [title, setTitle] = useState<HeroProps["title"]>("");
	const [subtitle, setSubtitle] = useState<HeroProps["subtitle"]>("");
	const [image, setImage] = useState<string>(null);
	const [inputedImage, setInputedImage] = useState<Blob | Uint8Array | ArrayBuffer>(null);

	useEffect(() => {
		setTitle(details?.title ?? "");
		setSubtitle(details?.subtitle ?? "");
		setImage(details?.imageUrl ?? "");
	}, [details]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await updateData({
				title,
				subtitle,
				image,
				inputedImage
			});
		} catch (error) {
			console.log("error ", error);
		}
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<form
				method="POST"
				onSubmit={handleSubmit}>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">Tela Inicial</h2>
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
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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
									htmlFor="about"
									className="block text-sm font-medium leading-6 text-gray-900">
									Sobre
								</label>
								<div className="mt-2">
									<textarea
										id="about"
										name="about"
										rows={3}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={(event) => setSubtitle(event.target.value)}
										value={subtitle}
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="photo"
									className="block text-sm font-medium leading-6 text-gray-900">
									Photo
								</label>
								<div className="mt-2 flex items-center gap-x-3">
									<img
										className="h-10 w-10"
										src={inputedImage ? URL.createObjectURL(inputedImage) : image}
									/>
									<label
										htmlFor="file-upload"
										className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
										<span>Change</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
											onChange={(event) => setInputedImage(event.target.files[0])}
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						type="submit"
						className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Salvar
					</button>
				</div>
			</form>
		</div>
	);
}
