import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

const features = [
	{
		name: "Push to deploy.",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: CloudArrowUpIcon
	},
	{
		name: "SSL certificates.",
		description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
		icon: LockClosedIcon
	},
	{
		name: "Database backups.",
		description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ServerIcon
	}
];

export default function ProjectsSection() {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projetos</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">Projetos desenvolvidos no decorrer da minha carreira</p>
				</div>
			</div>
			<div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-base font-semibold leading-7 text-lime-600">REVIT</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Residencia Beira Mar</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Projeto do zero fornecido apenas o terreno e grade para base estrutural. Design e Terreo Livre
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div
										key={feature.name}
										className="relative pl-9">
										<dt className="inline font-semibold text-gray-900">
											<feature.icon
												className="absolute left-1 top-1 h-5 w-5 text-lime-600"
												aria-hidden="true"
											/>
											{feature.name}
										</dt>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<img
						src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
						alt="Product screenshot"
						className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 place-self-center"
						width={2432}
						height={1442}
					/>
				</div>
			</div>
		</div>
	);
}
