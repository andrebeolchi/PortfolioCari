import { useHero } from "../context/HeroContext.hooks";

export default function Footer() {
	const { data } = useHero();

	return (
		<footer className="bg-white dark:bg-gray-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a
							href="/"
							className="flex items-center">
							<img
								src={data?.imageUrl}
								className="h-8 me-3"
								alt="FlowBite Logo"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								{data?.title}
							</span>
						</a>
					</div>
					{[
						{
							title: "Cursos",
							links: [
								{
									title: "React",
									url: "/react"
								},
								{
									title: "Next.js",
									url: "/nextjs"
								},
								{
									title: "Tailwind CSS",
									url: "/tailwindcss"
								}
							]
						}
					].map(({ title, links }) => (
						<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
							<div>
								<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{title}</h2>
								<ul className="text-gray-500 dark:text-gray-400 font-medium">
									{links.map((link) => (
										<li className="mb-4">
											<a
												href={link.url}
												about="_blank"
												className="hover:underline">
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2024 {`${new Date().getFullYear() === 2024 ? "" : ` - ${new Date().getFullYear()}`}`}
					</span>
					<div className="flex mt-4 sm:justify-center sm:mt-0">
						<a
							href="#"
							target="_blank"
							className="text-gray-500 hover:text-lime-500 dark:hover:text-white transition ease-in-out">
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 30 30">
								<path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
							</svg>
							<span className="sr-only">Instagram page</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
